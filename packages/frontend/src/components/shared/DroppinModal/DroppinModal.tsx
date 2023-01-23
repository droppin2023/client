import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'

import { background2 } from '@constants/colors'
import { ONE_QUEST_DETAIL } from '@mockData'

import type { DroppinModalProps } from './DroppinModal.types'
import Done from '@components/icons/Done'
import Fail from '@components/icons/Fail'
import Loading from '@components/icons/Loading'

const DroppinModal = ({ isOpen, onClose, modatMessage, modalStatus }: DroppinModalProps) => {
  // TODO: fetch the quest details here
  const data = ONE_QUEST_DETAIL

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>
          {' '}
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody pb={6}>
          <VStack spacing={2} align="center" mt={4}></VStack>
          {modalStatus === 0 ? (
            <Loading position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
          ) : modalStatus === 1 ? (
            <Done position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
          ) : (
            <Fail position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
          )}

          <VStack align="center" mt={4}>
            <Text>{modatMessage}</Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default DroppinModal
