import * as globalSty from '@styles'

/* eslint-disable no-debugger */
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { DISCORD_REDIRECT_USER, LS_KEY_DISCORD_USER } from '@constants/discord'
import { background2, discordPurple, primary, primaryHighlight } from '@constants/colors'
import { useEffect, useRef, useState } from 'react'

import DiscordIcon from '@components/icons/DiscordIcon'
import { SIGNUP_PERSIST_KEY } from './SignupForm.constants'
import SectionHeader from '@components/shared/SectionHeader'
import SignupSuccess from './components/SignupSuccess'
import TwitterIcon from '@components/icons/TwitterIcon'
import UploadImage from '@components/shared/UploadImage'
import { generateAuthUrl } from '@helpers/discord'
import localStorageUtils from '@helpers/localStorageUtils'
import { uploadImage } from '@helpers/imageUtils'
import { useAccount } from 'wagmi'
import usePostSignup from '@queries/usePostSignup'
import { useRouter } from 'next/router'
import { useUserContext } from '@context/UserContext'

const SignupForm = () => {
  const [localImgUrl, setLocalImgUrl] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [twitter, setTwitter] = useState('')

  const [discordUsername, setDiscordUsername] = useState('')
  const [discordDiscriminator, setDiscordDiscriminator] = useState('')
  const [discordId, setDiscordId] = useState('')

  const { handleUserLogin } = useUserContext()
  const { postSignup, isLoading, error } = usePostSignup()
  const { address } = useAccount()
  const router = useRouter()

  const confirmationCancelRef = useRef(null)

  const discordUserData =
    JSON.stringify(localStorageUtils.read(LS_KEY_DISCORD_USER)) === '{}'
      ? {
          id: '',
          username: '',
          discriminator: '',
        }
      : localStorageUtils.read(LS_KEY_DISCORD_USER)

  const handleFinish = async () => {
    // TODO: post the twitter

    // upload image
    // const uploadUrl = await uploadImage(localImgUrl)

    const params = {
      address: address?.toString() as string,
      name,
      username,
      description: bio,
      discord: {
        id: discordId,
        name: discordUsername,
        discriminator: discordDiscriminator,
      },
      image: '',
      twitter: `https://twitter.com/${twitter}`,
    }

    console.log('SIGNUP PARAMS', params)

    const res = postSignup(params)
    setIsConfirmationOpen(false)
    setIsFinished(true)

    await handleUserLogin(username)

    router.push(`/user/${username}`)
  }

  const handleConnectDiscord = () => {
    // persist our sign up data
    localStorageUtils.write(SIGNUP_PERSIST_KEY, {
      localImgUrl,
      name,
      username,
      bio,
      twitter,
    })

    // open the authentication link
    window.location.replace(generateAuthUrl(DISCORD_REDIRECT_USER) as string)
  }

  useEffect(() => {
    if (discordUserData.id.length > 0) {
      // reload persisted data
      const persistedData = localStorageUtils.read(SIGNUP_PERSIST_KEY)
      setLocalImgUrl(persistedData.localImgUrl)
      setName(persistedData.name)
      setUsername(persistedData.username)
      setBio(persistedData.bio)
      setTwitter(persistedData.twitter)

      // set discord data
      setDiscordUsername(discordUserData.username)
      setDiscordDiscriminator(discordUserData.discriminator)
      setDiscordId(discordUserData.id)

      // clear
      localStorageUtils.write(LS_KEY_DISCORD_USER, {})
      localStorageUtils.write(SIGNUP_PERSIST_KEY, {})
    }

    return () => {
      localStorageUtils.write(LS_KEY_DISCORD_USER, {})
      localStorageUtils.write(SIGNUP_PERSIST_KEY, {})
    }
  }, [discordUserData])

  return (
    <>
      {!isFinished && (
        <VStack spacing={5} margin="56px 0">
          <SectionHeader title="Welcome To Droppin" subtitle="" />

          <VStack spacing={5} align="left" width="50%">
            <Text fontSize="2xl" as="b">
              Sign Up
            </Text>

            <SimpleGrid columns={2}>
              <FormControl>
                <FormLabel>Profile Picture</FormLabel>
                <UploadImage
                  onFileLoad={(uploaded: string) => setLocalImgUrl(uploaded)}
                  loaded={localImgUrl}
                />
              </FormControl>
              <VStack>
                <FormControl mt={4}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    variant="filled"
                    placeholder="Write your display name here"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Username</FormLabel>
                  <FormHelperText css={[globalSty.helperText]}>
                    Your username cannot be changed and must be unique after signing up, please
                    choose wisely.
                  </FormHelperText>
                  <InputGroup>
                    <InputLeftAddon>
                      <Text>@</Text>
                    </InputLeftAddon>
                    <Input
                      variant="filled"
                      placeholder="Write your username here"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Social connections</FormLabel>
                  <VStack align="left">
                    <Flex justifyContent={'space-between'}>
                      <HStack>
                        <DiscordIcon />
                        <Text>Discord</Text>
                      </HStack>

                      <Button bg={discordPurple} onClick={handleConnectDiscord}>
                        {discordDiscriminator.length > 0 ? (
                          <Text as="span">{`${discordUsername}#${discordDiscriminator}`}</Text>
                        ) : (
                          'Connect Discord'
                        )}
                      </Button>
                    </Flex>
                    <Flex justifyContent={'space-between'} gap={3}>
                      <HStack>
                        <TwitterIcon />
                        <Text>Twitter</Text>
                      </HStack>
                      <InputGroup>
                        <InputLeftAddon>
                          <Text>@</Text>
                        </InputLeftAddon>
                        <Input
                          variant="filled"
                          placeholder="your_twitter"
                          onChange={(e) => setTwitter(e.target.value)}
                          value={twitter}
                        />
                      </InputGroup>
                    </Flex>
                  </VStack>
                </FormControl>
              </VStack>
            </SimpleGrid>

            <FormControl mt={4}>
              <FormLabel>Introduction</FormLabel>
              <Textarea
                variant="filled"
                placeholder="Write something about yourself."
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
            </FormControl>

            <Flex justifyContent="flex-end">
              <Button
                onClick={() => setIsConfirmationOpen(true)}
                size="lg"
                bg={primary}
                _hover={{ bg: primaryHighlight }}
              >
                Sign Up
              </Button>
            </Flex>
          </VStack>
        </VStack>
      )}

      <AlertDialog
        isOpen={isConfirmationOpen}
        leastDestructiveRef={confirmationCancelRef}
        onClose={() => setIsConfirmationOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={background2}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm submission
            </AlertDialogHeader>

            <AlertDialogBody>
              Please make sure you input the correct information before submitting!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={confirmationCancelRef} onClick={() => setIsConfirmationOpen(false)}>
                Cancel
              </Button>
              <Button bg={primary} _hover={{ bg: primaryHighlight }} onClick={handleFinish} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {isFinished && <SignupSuccess />}
    </>
  )
}

export default SignupForm
