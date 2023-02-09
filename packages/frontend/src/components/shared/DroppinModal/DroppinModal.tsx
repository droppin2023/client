import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'

import { background2 } from '@constants/colors'

import Done from '@components/icons/Done'
import Fail from '@components/icons/Fail'
import type { DroppinModalProps } from './DroppinModal.types'

const DroppinModal = ({ isOpen, onClose, modatMessage, modalStatus }: DroppinModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalBody pb={6}>
          <VStack spacing={10} align="center" mt={4}>
            {modalStatus === 0 ? (
              <Spinner size="xl" />
            ) : modalStatus === 1 ? (
              <Done width="48px" height="48px" />
            ) : (
              <Fail />
            )}

            <Text>{modatMessage}</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DroppinModal
