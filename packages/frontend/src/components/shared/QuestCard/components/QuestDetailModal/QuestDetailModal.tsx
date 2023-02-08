import { CheckIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
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
  useToast,
  VStack,
} from '@chakra-ui/react'

import DiscordIcon from '@components/icons/DiscordIcon'
import { QuestType } from '@queries/common'
import usePostCompleteQuest from '@queries/usePostCompleteQuest'
import usePostSubmitQuest from '@queries/usePostSubmitQuest'

import { background2, discordPurple, primary, primaryHighlight, secondary } from '@constants/colors'
import { useUserContext } from '@context/UserContext'
import * as globalSty from '@styles'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import type { QuestDetailModalProps } from './QuestDetailModal.types'

const QuestDetailModal = ({ isOpen, onClose, questType, quest }: QuestDetailModalProps) => {
  const { user } = useUserContext()

  const [questFormEntry, setQuestFormEntry] = useState('')

  // TODO: THIS IS A POC STAGE STATE
  const [isDiscordQualified, setIsDiscordQualified] = useState(false)
  const [discordLoading, setDiscordLoading] = useState(false)

  const toast = useToast()
  const router = useRouter()

  const {
    submitQuest,
    isLoading: submitQuestLoading,
    error: submitQuestError,
  } = usePostSubmitQuest()

  const { completeQuest, isLoading, error } = usePostCompleteQuest()

  const handleSubmit = async () => {
    const response = await submitQuest({
      questId: quest.id,
      username: user?.username as string,
      userSubmission: questFormEntry,
    })

    toast({
      title: 'Quest Submitted',
      description: '',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })

    router.reload()
  }

  const handleDiscordCheck = () => {
    setDiscordLoading(true)
    setTimeout(() => {
      setIsDiscordQualified(true)
      setDiscordLoading(false)
      handleSubmit().then(() => {
        const sth = completeQuest({ questId: quest.id, username: user?.username as string })
        router.reload()
      })
    }, 1000)
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
                {quest.engagePoints}{' '}
                <Text as="span" color={primary}>
                  {quest.symbol}
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

              {isDiscordQualified && (
                <HStack spacing={5} mb={5}>
                  <CheckIcon />
                  <Text>Discord conditions passed</Text>
                </HStack>
              )}

              <Button
                bgColor={discordPurple}
                onClick={handleDiscordCheck}
                disabled={isDiscordQualified}
                isLoading={discordLoading}
              >
                <DiscordIcon />
                <Text ml={4}>Check Discord Conditions</Text>
              </Button>
            </FormControl>
          )}
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'} gap="12px">
            {questType === QuestType.discord ? (
              isDiscordQualified && (
                <Text color={primary} as="b">
                  Quest Verified, You can close this modal now
                </Text>
              )
            ) : (
              <Button
                size="lg"
                bg={primary}
                _hover={{ bg: primaryHighlight }}
                flex="1"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default QuestDetailModal
