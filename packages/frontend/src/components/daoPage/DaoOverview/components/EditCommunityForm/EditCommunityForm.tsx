import Image from 'next/image'
import { useState } from 'react'

import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import DiscordIcon from '@components/icons/DiscordIcon'
import WebsiteIcon from '@components/icons/WebsiteIcon'
import UploadImage from '@components/shared/UploadImage'

import { DAO_CATEGORIES } from '@constants/categories'
import { background2, discordPurple, primary, primaryHighlight, secondary } from '@constants/colors'

import ConnectDiscordModal from '@components/shared/ConnectDiscordModal'
import DroppinRadioGroup from '@components/shared/DroppinRadioGroup'
import {
  DISCORD_REDIRECT_GET_USER_GUILDS,
  LS_GET_USER_GUILD_DESTINATION,
  LS_KEY_DISCORD_USER_GUILDS,
  LS_KEY_IS_CONNECT_DISCORD_OPEN,
} from '@constants/discord'
import { useDaoPageContext } from '@context/DaoPageContext'
import { useUserContext } from '@context/UserContext'
import { generateAuthUrl } from '@helpers/discord'
import localStorageUtils from '@helpers/localStorageUtils'
import { truncateString } from '@helpers/stringUtils'
import { Category, DiscordGuild, DiscordUser } from '@queries/common'
import usePostEditGroup from '@queries/usePostEditGroup'
import { EditGroupParams } from '@queries/usePostEditGroup/usePostEditGroup.types'
import { useRouter } from 'next/router'
import { LS_EDIT_COMMUNITY_DATA } from './EditCommunityForm.constants'
import * as sty from './EditCommunityForm.styles'
import { EditCommunityFormProps } from './EditCommunityForm.types'

// TODO: low-prio, fix name not popping up
const EditCommunityForm = (props: EditCommunityFormProps) => {
  const {
    isOpen,
    onClose,
    badges,
    members,
    name: currentName,
    img,
    description: currentDescription,
    website: currentWebsite,
    category,
    owner,
    discord: currentDiscord,
  } = props

  const { user } = useUserContext()
  const { id } = useDaoPageContext()

  // we prio the local storage first, if doesn't exist then we use the props
  const persistedCommunityData = localStorageUtils.read(LS_EDIT_COMMUNITY_DATA)
  const cachedCommunityData =
    JSON.stringify(persistedCommunityData ?? {}) === '{}'
      ? {
          localImgUrl: img,
          name: currentName,
          description: currentDescription,
          website: currentWebsite,
          selectedCategory: category,
          discord: currentDiscord,
        }
      : persistedCommunityData

  const [localImgUrl, setLocalImgUrl] = useState(cachedCommunityData.localImgUrl)
  const [name, setName] = useState<string>(cachedCommunityData.name)
  const [description, setDescription] = useState<string>(cachedCommunityData.description)
  const [website, setWebsite] = useState<string>(cachedCommunityData.website)
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    cachedCommunityData.selectedCategory,
  )
  const [discord, setDiscord] = useState<DiscordGuild>(cachedCommunityData.discord)

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
    return guildData.guilds
  })

  const { editGroup } = usePostEditGroup()
  const router = useRouter()

  const handleSubmit = async () => {
    const params: EditGroupParams = {
      id,
      name,
      description,
      category,
      discord,
      link: website,
      logo: localImgUrl,
    }
    await editGroup(params)

    router.reload()
  }

  const handleOpenConnectDiscord = () => {
    // store initial data in local storage
    localStorageUtils.write(LS_EDIT_COMMUNITY_DATA, {
      localImgUrl,
      name,
      description,
      website,
      selectedCategory,
      discord,
    })

    localStorageUtils.write(LS_GET_USER_GUILD_DESTINATION, { dest: `/community/${id}` })

    window.location.replace(generateAuthUrl(DISCORD_REDIRECT_GET_USER_GUILDS))
  }

  const handleSubmitConnectDiscord = (submittedGuild: DiscordGuild) => {
    setIsConnectDiscordOpen(false)
    setDiscord(submittedGuild)

    localStorageUtils.write(LS_KEY_DISCORD_USER_GUILDS, {})
    localStorageUtils.write(LS_KEY_IS_CONNECT_DISCORD_OPEN, {})
    localStorageUtils.write(LS_EDIT_COMMUNITY_DATA, {})
  }

  const handleSelectCategory = (nextValue: string) => {
    setSelectedCategory(nextValue as Category)
  }

  const handleClose = () => {
    localStorageUtils.write(LS_KEY_DISCORD_USER_GUILDS, {})
    localStorageUtils.write(LS_KEY_IS_CONNECT_DISCORD_OPEN, {})
    onClose()
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent bg={background2}>
          <ModalHeader>Edit Community</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Logo image</FormLabel>
              <UploadImage
                loaded={img as string}
                onFileLoad={(uploaded: string) => setLocalImgUrl(uploaded)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Name</FormLabel>
              <Input value={name} variant="filled" onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <FormHelperText css={[sty.helperText]}>
                Briefly describe your community
              </FormHelperText>
              <Textarea
                variant="filled"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <DroppinRadioGroup
                options={DAO_CATEGORIES}
                onChange={handleSelectCategory}
                value={selectedCategory}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Social connections</FormLabel>
              <FormHelperText css={[sty.helperText]}>
                Help people find and join your community by connecting social accounts ( also use
                for checking quest-conditions automatically )
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
                    ml={8}
                    variant="filled"
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="http://www.yoursite.io"
                  />
                </Flex>
              </VStack>
            </FormControl>

            {/* <FormControl mt={4}>
            <FormLabel>Blockchain</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Select the blockchain where you’d like new badges from this community to be added by
              default
            </FormHelperText>
            <Wrap>
              {NETWORKS.map((item, index) => (
                <WrapItem key={index}>
                  <DroppinCheckbox isChecked={true}>{item}</DroppinCheckbox>
                </WrapItem>
              ))}
            </Wrap>
          </FormControl> */}

            {/* <FormControl mt={4}>
            <FormLabel>Default joining badge</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Your new members would get the &quot;NewBie&quot; badge upon joining.
            </FormHelperText>
            <QuestBadge name="NewBie" isLocked={false} />
          </FormControl> */}

            <FormControl mt={4}>
              <FormLabel>Admin</FormLabel>
              <FormHelperText css={[sty.helperText]}>
                Admin can modify community settings
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
          </ModalBody>

          <ModalFooter>
            <Flex width="100%" justifyContent={'space-between'}>
              <Button onClick={handleSubmit} size="lg" colorScheme="red" variant="outline">
                Delete Community
              </Button>
              <Button
                onClick={handleSubmit}
                size="lg"
                bg={primary}
                _hover={{ bg: primaryHighlight }}
              >
                Save Changes
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
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

export default EditCommunityForm
