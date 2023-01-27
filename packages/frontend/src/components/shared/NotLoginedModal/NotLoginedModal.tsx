import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
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

import { background2, discordPurple, primary, primaryHighlight, secondary } from '@constants/colors'

import type { NotLoginedModalProps } from './NotLoginedModal.types'

const NotLoginedModal = ({ isOpen, onClose }: NotLoginedModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        {/* <ModalHeader>{quest.name}</ModalHeader> */}
        {/* <ModalCloseButton /> */}
        <ModalBody pb={6}>
          <Flex width="100%" justifyContent={'center'} gap="12px">
            <Text>You have to Login</Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'} gap="12px">
            <Button
              size="lg"
              bg={primary}
              _hover={{ bg: primaryHighlight }}
              flex="1"
              onClick={onClose}
            >
              ok
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NotLoginedModal
