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
  useToast,
  VStack,
} from '@chakra-ui/react'

import DiscordIcon from '@components/icons/DiscordIcon'
import { QuestType } from '@components/queries/common'
import usePostSubmitQuest from '@components/queries/usePostSubmitQuest'

import { background2, discordPurple, primary, primaryHighlight, secondary } from '@constants/colors'
import { useUserContext } from '@context/UserContext'
import * as globalSty from '@styles'
import { useEffect, useState } from 'react'

import type { QuestDetailModalProps } from './QuestDetailModal.types'

const QuestDetailModal = ({ isOpen, onClose, questType, quest }: QuestDetailModalProps) => {
  const { user } = useUserContext()
  const toast = useToast()

  const [questFormEntry, setQuestFormEntry] = useState('')

  // TODO: fetch the quest details here
  // const data = ONE_QUEST_DETAIL
  // const {
  //   data,
  //   isLoading: fetchQuestDetailLoading,
  //   error: fetchQuestDetailError,
  // } = useFetchQuestDetail({ questId: quest.id })

  const {
    submitQuest,
    isLoading: submitQuestLoading,
    error: submitQuestError,
  } = usePostSubmitQuest()

  const handleSubmit = async () => {
    const response = await submitQuest({
      questId: quest.id,
      username: user?.username as string,
      userSubmission: questFormEntry,
    })

    toast({
      title: 'Quest Submitted',
      description: 'Wait for the admin to get back to you',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })

    onClose()
  }

  useEffect(() => {
    console.log('QUEST', quest)
  }, [quest])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>{quest.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={2} align="left" mt={4}>
            {/* <Flex justifyContent="space-between">
              <Text color={secondary}>Schema Hash</Text>
              <Text as="b">{data.schemaHash}</Text>
            </Flex> */}

            <Flex justifyContent="space-between">
              <Text color={secondary}>Reward Engagement</Text>
              <Text as="b">
                {quest.engageScore.number}{' '}
                <Text as="span" color={primary}>
                  {quest.engageScore.unit}
                </Text>
              </Text>
            </Flex>
          </VStack>

          <VStack align="left" mt={4}>
            <Text color={secondary}>Description</Text>
            <Text>{quest.detail}</Text>
          </VStack>

          {questType === QuestType.form && (
            <FormControl mt={4}>
              <FormLabel color={secondary}>Submit Form</FormLabel>
              <Textarea
                variant="filled"
                placeholder="Write about your completion for this request here"
                onChange={(e) => setQuestFormEntry(e.target.value)}
                value={questFormEntry}
              />
            </FormControl>
          )}

          {questType === QuestType.discord && (
            <FormControl mt={4}>
              <FormLabel>Connect Discord</FormLabel>
              <FormHelperText css={[globalSty.helperText]}>
                To complete this quest, you have to connect discord account
              </FormHelperText>
              <Button bgColor={discordPurple}>
                <DiscordIcon />
                <Text ml={4}>Connect Discord</Text>
              </Button>
            </FormControl>
          )}
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'} gap="12px">
            <Button
              size="lg"
              bg={primary}
              _hover={{ bg: primaryHighlight }}
              flex="1"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default QuestDetailModal
