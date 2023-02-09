import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Spinner,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import DiscordIcon from '@components/icons/DiscordIcon'
import WebsiteIcon from '@components/icons/WebsiteIcon'
import Image from 'next/image'

import SectionHeader from '@components/shared/SectionHeader'
import UploadImage from '@components/shared/UploadImage'

import { background2, discordPurple, primary, primaryHighlight, secondary } from '@constants/colors'
import { useCreateCommunityContext } from '@context/CreateCommunityContext'
import * as globalSty from '@styles'

import { LS_EDIT_COMMUNITY_DATA } from '@components/daoPage/DaoOverview/components/EditCommunityForm/EditCommunityForm.constants'
import ConnectDiscordModal from '@components/shared/ConnectDiscordModal'
import DroppinRadioGroup from '@components/shared/DroppinRadioGroup'
import { DAO_CATEGORIES } from '@constants/categories'
import {
  DISCORD_REDIRECT_GET_USER_GUILDS,
  LS_GET_USER_GUILD_DESTINATION,
  LS_KEY_DISCORD_USER_GUILDS,
  LS_KEY_IS_CONNECT_DISCORD_OPEN,
} from '@constants/discord'
import { useUserContext } from '@context/UserContext'
import { generateAuthUrl } from '@helpers/discord'
import { uploadImage } from '@helpers/imageUtils'
import localStorageUtils from '@helpers/localStorageUtils'
import { truncateString } from '@helpers/stringUtils'
import { Category, DiscordGuild, DiscordUser } from '@queries/common'
import usePostCreateGroup from '@queries/usePostCreateGroup'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import * as sty from './CreateCommunityInfoForm.styles'
import { CreateCommunityInfoFormProps } from './CreateCommunityInfoForm.types'
import usePolygonIDInit from '@queries/usePolygonIDInit'

const CreateCommunityInfoForm = ({ onNext, onPrev }: CreateCommunityInfoFormProps) => {
  const {
    localImgUrl,
    name,
    description,
    website,
    selectedCategory,
    repUnit,
    discord,
    email,
    password,
    setLocalImgUrl,
    setRepUnit,
    setName,
    setDescription,
    setWebsite,
    setSelectedCategory,
    setDiscord,
    setEmail,
    setPassword,
  } = useCreateCommunityContext()

  const { user } = useUserContext()

  const router = useRouter()

  const { createGroup, isLoading, error } = usePostCreateGroup()
  const { initPolygonId } = usePolygonIDInit()
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const confirmationCancelRef = useRef(null)

  // we prio the local storage first, if doesn't exist then we use the props
  const persistedCommunityData = localStorageUtils.read(LS_EDIT_COMMUNITY_DATA)

  const cachedCommunityData =
    JSON.stringify(persistedCommunityData ?? {}) === '{}'
      ? {
          localImgUrl,
          name,
          description,
          website,
          selectedCategory,
          discord,
          repUnit,
          email,
          password,
        }
      : persistedCommunityData

  const guildData =
    JSON.stringify(localStorageUtils.read(LS_KEY_DISCORD_USER_GUILDS) ?? {}) === '{}'
      ? {
          guilds: [],
        }
      : localStorageUtils.read(LS_KEY_DISCORD_USER_GUILDS)

  const [isConnectDiscordOpen, setIsConnectDiscordOpen] = useState(() => {
    const connectModalLastState = localStorageUtils.read(LS_KEY_IS_CONNECT_DISCORD_OPEN)

    if (Object.keys(connectModalLastState || {}).length === 0) return false

    return connectModalLastState.isOpen
  })

  const [userGuilds, setUserGuilds] = useState(() => {
    console.log(guildData, 'errrrrrrrrrr')
    return guildData.guilds
  })

  const handleSelectCategory = (nextValue: string) => {
    setSelectedCategory(nextValue as Category)
  }

  const handleGroupCreation = async () => {
    // upload image
    const uploadUrl = await uploadImage(localImgUrl)
    const params_polygon = {
      email,
      password,
      displayName: name,
      legalName: repUnit,
      logo: localImgUrl,
    }

    const res_polygonID = await initPolygonId(params_polygon)

    const params = {
      name,
      link: website,
      logo: uploadUrl,
      description,
      category: selectedCategory,
      discord: discord,
      repUnit,
      issuerId: res_polygonID?.issuerId,
      token: res_polygonID?.token,
      email,
      password,
    }

    const res = await createGroup(params)

    router.push(`/community/${res.id}`)
  }

  const handleOpenConnectDiscord = () => {
    localStorageUtils.write(LS_GET_USER_GUILD_DESTINATION, { dest: `/create` })

    // store initial data in local storage
    localStorageUtils.write(LS_EDIT_COMMUNITY_DATA, {
      localImgUrl,
      name,
      description,
      website,
      selectedCategory,
      discord,
      repUnit,
      email,
      password,
    })

    window.location.replace(generateAuthUrl(DISCORD_REDIRECT_GET_USER_GUILDS))
  }

  const handleSubmitConnectDiscord = (submittedGuild: DiscordGuild) => {
    setIsConnectDiscordOpen(false)
    setDiscord(submittedGuild)

    localStorageUtils.write(LS_KEY_DISCORD_USER_GUILDS, {})
    localStorageUtils.write(LS_KEY_IS_CONNECT_DISCORD_OPEN, {})
    localStorageUtils.write(LS_EDIT_COMMUNITY_DATA, {})
  }

  const handleClose = () => {
    localStorageUtils.write(LS_KEY_DISCORD_USER_GUILDS, {})
    localStorageUtils.write(LS_KEY_IS_CONNECT_DISCORD_OPEN, {})

    if (onPrev) onPrev()
  }

  // load data from local storage
  useEffect(() => {
    setLocalImgUrl(cachedCommunityData.localImgUrl)
    setRepUnit(cachedCommunityData.repUnit)
    setName(cachedCommunityData.name)
    setDescription(cachedCommunityData.description)
    setWebsite(cachedCommunityData.website)
    setSelectedCategory(cachedCommunityData.selectedCategory)
    setDiscord(cachedCommunityData.discord)
    setEmail(cachedCommunityData.email)
    setPassword(cachedCommunityData.password)
  }, [cachedCommunityData])

  return (
    <>
      <VStack align="left" width="100%" spacing={5}>
        <SectionHeader
          title="Tell us about your community"
          subtitle={
            <Text color={primary}>
              Share some basic info, like name of community and type of community
            </Text>
          }
        />
        <FormControl>
          <FormLabel>Logo image</FormLabel>
          <UploadImage
            onFileLoad={(uploaded: string) => setLocalImgUrl(uploaded)}
            loaded={localImgUrl}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Name</FormLabel>
          <Input
            variant="filled"
            placeholder="e.g. DroppinDAO"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Name your community’s Engagement score</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Members can get Community Engagement score after they complete their quest
          </FormHelperText>
          <Input
            value={repUnit}
            onChange={(e) => setRepUnit(e.target.value)}
            variant="filled"
            placeholder="e.g. DROP"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Briefly describe your community
          </FormHelperText>
          <Textarea
            variant="filled"
            placeholder="e.g. DAO for Droppin Protocol Users"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </FormControl>

        <HStack>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <FormHelperText css={[globalSty.helperText]}>Email for Polygon ID</FormHelperText>
            <Input
              variant="filled"
              placeholder="e.g. email@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <FormHelperText css={[globalSty.helperText]}>Password for Polygon ID</FormHelperText>
            <Input
              variant="filled"
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormControl>
        </HStack>

        <FormControl mt={4}>
          <FormLabel>Category</FormLabel>
          <DroppinRadioGroup
            options={DAO_CATEGORIES}
            onChange={handleSelectCategory}
            defaultValue={Category.Other}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Social connections</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Help people find and join your community by connecting social accounts ( also use for
            checking quest-conditions automatically )
          </FormHelperText>
          <VStack align="left">
            <Flex justifyContent={'space-between'}>
              <HStack>
                <DiscordIcon />
                <Text>Discord</Text>
              </HStack>
              <Button
                variant="filled"
                bg={discordPurple}
                onClick={handleOpenConnectDiscord}
                maxWidth="200px"
              >
                <Text>
                  {(discord?.guildId || '').length
                    ? truncateString(discord.name, 20)
                    : 'Connect Discord'}
                </Text>
              </Button>
            </Flex>
            <Flex justifyContent={'space-between'}>
              <HStack>
                <WebsiteIcon />
                <Text>Website</Text>
              </HStack>
              <Input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="http://www.yoursite.io"
                ml={8}
                variant="filled"
              />
            </Flex>
          </VStack>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Admin</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Admin can modify community settings. This should be your account
          </FormHelperText>
          <HStack spacing={3}>
            {(user?.image?.length || '') > 5 ? (
              <Image
                src={user?.image as string}
                alt={'Admin image'}
                css={[sty.userImage]}
                width={32}
                height={32}
              />
            ) : (
              <Avatar name={user?.username} css={[sty.userImage]} />
            )}

            <Text>{user?.name}</Text>
            <Text color={secondary}>{`@${user?.username}`}</Text>
          </HStack>
        </FormControl>

        <Flex justifyContent="space-between" mt={8}>
          <Button
            onClick={handleClose}
            alignSelf="flex-end"
            bg={primary}
            _hover={{ bg: primaryHighlight }}
            size="lg"
          >
            Prev
          </Button>

          <Button
            onClick={() => setIsConfirmationOpen(true)}
            alignSelf="flex-end"
            bg={primary}
            _hover={{ bg: primaryHighlight }}
            size="lg"
          >
            Create Community
          </Button>
        </Flex>
      </VStack>

      <AlertDialog
        isOpen={isConfirmationOpen}
        leastDestructiveRef={confirmationCancelRef}
        onClose={() => setIsConfirmationOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={background2}>
            {isLoading ? (
              <>
                <AlertDialogHeader fontSize="lg" fontWeight="bold"></AlertDialogHeader>

                <AlertDialogBody alignItems={'center'}>
                  <VStack>
                    <Spinner size="lg" />
                    <Text>Please Wait...</Text>
                  </VStack>
                </AlertDialogBody>

                <AlertDialogFooter></AlertDialogFooter>
              </>
            ) : (
              <>
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
                  <Button
                    bg={primary}
                    _hover={{ bg: primaryHighlight }}
                    onClick={handleGroupCreation}
                    ml={3}
                  >
                    Submit
                  </Button>
                </AlertDialogFooter>
              </>
            )}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {isConnectDiscordOpen && (
        <ConnectDiscordModal
          discordUser={user?.discord as DiscordUser}
          guilds={userGuilds}
          isOpen={true}
          onClose={() => setIsConnectDiscordOpen(false)}
          onSubmit={handleSubmitConnectDiscord}
        />
      )}
    </>
  )
}

export default CreateCommunityInfoForm
