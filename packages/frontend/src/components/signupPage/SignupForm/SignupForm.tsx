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
import { useRef, useState } from 'react'

import UploadImage from '@components/shared/UploadImage'
import { useAccount } from 'wagmi'
import DiscordIcon from '@components/icons/DiscordIcon'
import SectionHeader from '@components/shared/SectionHeader'
import { background2, discordPurple, primary, primaryHighlight } from '@constants/colors'
import * as globalSty from '@styles'
import SignupSuccess from './components/SignupSuccess'
import usePostSignup from '@components/queries/usePostSignup'

const SignupForm = () => {
  const [localImgUrl, setLocalImgUrl] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const { postSignup, isLoading, error } = usePostSignup()
  const { address } = useAccount()

  const confirmationCancelRef = useRef(null)

  const handleFinish = () => {
    const params = {
      address: address?.toString() as string,
      name,
      username,
      description: bio,
      // discord: '',
      image: localImgUrl,
    }
    const res = postSignup(params)
    setIsConfirmationOpen(false)
    setIsFinished(true)
  }

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
                <UploadImage onFileLoad={(uploaded: string) => setLocalImgUrl(uploaded)} />
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
                      <Button bg={discordPurple}>Connect Discord</Button>
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
              Comfirm submission
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
