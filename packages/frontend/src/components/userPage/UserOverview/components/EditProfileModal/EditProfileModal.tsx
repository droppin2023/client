import { useState } from 'react'

import {
  Button,
  Flex,
  FormControl,
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
import UploadImage from '@components/shared/UploadImage'
import { background2, discordPurple, primary, primaryHighlight } from '@constants/colors'
import { useUserPageContext } from '@context/UserPageContext'

import DiscordIcon from '@components/icons/DiscordIcon'
import type { EditProfileModalProps, UserInput } from './EditProfileModal.types'

const EditProfileModal = ({ isOpen, onClose }: EditProfileModalProps) => {
  const {
    userData: { name: currentName, image: currentImg, description: currentDescription },
  } = useUserPageContext()

  const [input, setInput] = useState<UserInput>({
    name: currentName,
    image: currentImg,
    description: currentDescription,
  })

  const handleSubmit = () => {
    return
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Display picture</FormLabel>
            <UploadImage
              onFileLoad={(img) => {
                return
              }}
              loaded={input.image}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Username</FormLabel>
            <Input variant="filled" value="@metalboyrick" disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Full Name</FormLabel>
            <Input value={input.name} variant="filled" placeholder="Input you full name here" />
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

          <FormControl mt={4}>
            <FormLabel>Short Bio</FormLabel>
            <Textarea
              value={input.description}
              variant="filled"
              placeholder="Write something about yourself"
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit} size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditProfileModal
