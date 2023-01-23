import Image from 'next/image'

import {
  Box,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'

import { background2, orange, secondary, secondaryWeak } from '@constants/colors'

import { Status } from '@components/queries/common'

import Done from '@components/icons/Done'
import { HEADER_MAPPING } from './UserSideModal.constants'
import * as sty from './UserSideModal.styles'
import type { UserSideModalProps } from './UserSideModal.types'

import { ONE_QUEST_DETAIL_TWO } from '@mockData'

const UserSideModal = ({ isOpen, onClose }: UserSideModalProps) => {
  // TODO: fetch real data
  const data = ONE_QUEST_DETAIL_TWO

  const renderBottomMap = {
    [Status.noStatus]: <></>,
    [Status.pending]: <></>,
    [Status.accepted]: (
      <VStack>
        <Text fontSize="xl" as="b" textAlign={'center'}>
          Scan QR with your polygon ID and get Claim
        </Text>
        {/* TODO: Polygon ID */}
        <Image src={'https://picsum.photos/200'} alt="Polygon ID" width={160} height={160} />
      </VStack>
    ),
    [Status.rejected]: (
      <>
        <VStack align="left">
          <Text color={secondary}>Feedback</Text>
          <Box bg={secondaryWeak} borderRadius="16px" padding="16px">
            {data.answer}
          </Box>
        </VStack>
      </>
    ),
    [Status.claimed]: (
      <>
        <VStack>
          <Done width="52px" height="52px" />
          <Text fontSize="xl" as="b">
            Claimed
          </Text>
        </VStack>
      </>
    ),
  }

  return (
    <Modal {...{ isOpen, onClose }}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalCloseButton />
        <ModalHeader>{HEADER_MAPPING[data.status]}</ModalHeader>
        <ModalBody>
          <VStack align="left" width="100%" spacing={5}>
            <VStack align="left">
              <Text color={secondary}>Schema Hash</Text>
              <Text as="b">{data.schemaHash}</Text>
            </VStack>
            <Flex width="100%" justifyContent={'space-between'}>
              <VStack align="left">
                <Text color={secondary}>Quest Name</Text>
                <Text as="b">{data.title}</Text>
              </VStack>
              <VStack align="left">
                <Text color={secondary}>Quest Reward</Text>
                <Text as="b" color={orange}>
                  {`${data.engageScore.number} ${data.engageScore.unit}`}
                </Text>
              </VStack>
            </Flex>
            <VStack align="left">
              <Text color={secondary}>Community</Text>
              {/* TODO: maybe add the organization name and image here for the response */}
              <HStack>
                <Image
                  src="https://picsum.photos/id/237/200/"
                  alt="Community Image"
                  width={24}
                  height={24}
                  css={[sty.daoImage]}
                />
                <Text as="b">LeCats DAO</Text>
              </HStack>
            </VStack>
            <VStack align="left">
              <Text color={secondary}>Your Submission</Text>
              <Box bg={secondaryWeak} borderRadius="16px" padding="16px">
                {data.message}
              </Box>
            </VStack>
            {renderBottomMap[data.status]}
          </VStack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default UserSideModal
