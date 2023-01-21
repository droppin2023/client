import Image from 'next/image'
import { useState } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
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
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import DiscordIcon from '@components/icons/DiscordIcon'
import WebsiteIcon from '@components/icons/WebsiteIcon'
import DroppinCheckbox from '@components/shared/DroppinCheckbox'
import UploadImage from '@components/shared/UploadImage'

import { DAO_CATEGORIES, NETWORKS } from '@constants/categories'
import { discordPurple, primary, primaryHighlight, secondaryWeak } from '@constants/colors'

import BadgeSelectRadioGroup from './components/BadgeSelectRadioGroup'
import { URL_PREFIX } from './EditCommunityForm.constants'
import * as sty from './EditCommunityForm.styles'
import { EditCommunityFormProps } from './EditCommunityForm.types'

const EditCommunityForm = ({
  isOpen,
  onClose,
  badges,
  members,
  name: currentName,
  img,
  description: currentDescription,
  website: currentWebsite,
  category,
}: EditCommunityFormProps) => {
  const [localImgUrl, setLocalImgUrl] = useState(img)
  const [name, setName] = useState(currentName)
  const [description, setDescription] = useState(currentDescription)
  const [defaultBadge, setDefaultBadge] = useState(badges[0].name)
  const [website, setWebsite] = useState(currentWebsite)
  const [selectedCategory, setSelectedCategory] = useState<any>(category)
  const [selectedBlockchain, setSelectedBlockchain] = useState<any>('')
  const [selectedAdmins, setSelectedAdmins] = useState<any>([])

  const handleSubmit = () => {}

  const handleConnectDiscord = () => {}

  const handleSelectCategories = () => {}

  const handleSelectBlockchain = () => {}

  const handleSelectAdmins = () => {}

  const handleSelectDefaultBadge = () => {}

  const handleChangeDescription = () => {}

  const handleChangeName = () => {}

  const handleChangeImage = () => {}

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={secondaryWeak}>
        <ModalHeader>Edit Community</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Logo image</FormLabel>
            <UploadImage onFileLoad={(uploaded: string) => setLocalImgUrl(uploaded)} />
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

          <FormControl mt={4}>
            <FormLabel>URL</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Customize your URL on Droppin. Must only contain lowercase letters, numbers, and
              hyphens
            </FormHelperText>
            <InputGroup>
              <InputLeftAddon>{URL_PREFIX}</InputLeftAddon>
              <Input
                variant="filled"
                placeholder="yourlink"
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <FormHelperText css={[sty.helperText]}>Briefly describe your community</FormHelperText>
            <Textarea
              variant="filled"
              placeholder="e.g. DAO for Droppin Protocol Users"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Wrap>
              {DAO_CATEGORIES.map((item, index) => (
                <WrapItem key={index}>
                  <DroppinCheckbox isChecked={item === selectedCategory}>{item}</DroppinCheckbox>
                </WrapItem>
              ))}
            </Wrap>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Social connections</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Help people find and join your community by connecting social accounts ( also use for
              checking quest-conditions automatically )
            </FormHelperText>
            <VStack align="left">
              <Flex justifyContent={'space-between'}>
                <HStack>
                  <DiscordIcon />
                  <Text>Discord</Text>
                </HStack>
                <Button bg={discordPurple}>Connect Discord</Button>
              </Flex>
              <Flex justifyContent={'space-between'}>
                <HStack>
                  <WebsiteIcon />
                  <Text>Website</Text>
                </HStack>
                <Input placeholder="yoursite.io" ml={8} variant="filled" />
              </Flex>
            </VStack>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Blockchain</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Select the blockchain where you’d like new badges from this community to be added by
              default
            </FormHelperText>
            <Wrap>
              {/* TODO: this should be a radio version */}
              {NETWORKS.map((item, index) => (
                <WrapItem key={index}>
                  <DroppinCheckbox>{item}</DroppinCheckbox>
                </WrapItem>
              ))}
            </Wrap>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Default joining badge</FormLabel>
            <BadgeSelectRadioGroup
              badges={badges}
              onChange={(value) => setDefaultBadge(value)}
              value={defaultBadge}
              defaultValue={defaultBadge}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Admin</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Admin can modify community settings
            </FormHelperText>
            <Wrap>
              {members.map((item, index) => (
                <WrapItem key={index}>
                  <DroppinCheckbox>
                    <HStack spacing={3}>
                      <Image src={item.img} alt={name} css={[sty.userImage]} />
                      <Text>{item.name}</Text>
                    </HStack>
                  </DroppinCheckbox>
                </WrapItem>
              ))}
            </Wrap>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'}>
            <Button onClick={handleSubmit} size="lg" colorScheme="red" variant="outline">
              Delete Community
            </Button>
            <Button onClick={handleSubmit} size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
              Save Changes
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditCommunityForm
