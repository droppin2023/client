import Image from 'next/image'

import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
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

import * as sty from './QuestReviewForm.styles'
import type { QuestReviewFormProps } from './QuestReviewForm.types'

import {
  background2,
  orange,
  primary,
  primaryHighlight,
  secondary,
  secondaryWeak,
} from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'
import usePostCompleteQuest from '@queries/usePostCompleteQuest'
import { useRouter } from 'next/router'

const QuestReviewForm = ({ isOpen, onClose, reviewContent }: QuestReviewFormProps) => {
  const { repUnit, id } = useDaoPageContext()

  const { completeQuest, isLoading, error } = usePostCompleteQuest()

  const router = useRouter()

  const handleAccept = async () => {
    await completeQuest({
      questId: reviewContent.quest.id,
      username: reviewContent.requestUser.username,
    })

    router.push(`/community/${id}`)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Review Quest</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex
            bg={secondaryWeak}
            padding="8px"
            borderRadius="12px"
            justifyContent={'space-between'}
          >
            <HStack>
              {(reviewContent.requestUser?.image || 'none') !== 'none' ? (
                <Image
                  src={reviewContent.requestUser?.image}
                  alt="Profile picture"
                  css={[sty.userImg]}
                  width={32}
                  height={32}
                />
              ) : (
                <Avatar name={reviewContent.requestUser?.name || ''} width="32px" height="32px" />
              )}

              <Text>{reviewContent.requestUser?.name}</Text>
            </HStack>
            <Button>View Profile</Button>
          </Flex>

          <VStack spacing={2} align="left" mt={4}>
            <Flex justifyContent={'space-between'}>
              <VStack spacing={1} align="left">
                <Text color={secondary}>Quest Name</Text>
                <Text as="b">{reviewContent.quest?.name}</Text>
              </VStack>
              <VStack spacing={1} align="left">
                <Text color={secondary}>Quest Reward</Text>
                <Text as="b" color={orange}>
                  {/* TODO: HARDCODED DATA */}
                  <>
                    {reviewContent.quest?.engageScore} {repUnit}
                  </>
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <FormControl mt={4}>
            <FormLabel color={secondary} as="span">
              Request Details
            </FormLabel>
            <Textarea variant="filled" disabled value={reviewContent.requestAnswer} />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel color={secondary}>Leave a Feedback</FormLabel>
            <Textarea variant="filled" placeholder="Leave your feedback to this request here" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'} gap="12px">
            <Button size="lg" colorScheme="red" flex="1">
              Reject
            </Button>
            <Button
              size="lg"
              bg={primary}
              _hover={{ bg: primaryHighlight }}
              flex="1"
              onClick={handleAccept}
            >
              Accept
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default QuestReviewForm
