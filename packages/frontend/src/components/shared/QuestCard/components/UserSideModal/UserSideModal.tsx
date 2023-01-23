import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

import type { UserSideModalProps } from './UserSideModal.types'

const UserSideModal = ({ isOpen, onClose, questStatus }: UserSideModalProps) => {
  return (
    <Modal {...{ isOpen, onClose }}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Pending Request</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UserSideModal
