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

import {
  background2,
  danger,
  discordPurple,
  primary,
  primaryHighlight,
  secondary,
} from '@constants/colors'
import { useUserContext } from '@context/UserContext'
import * as globalSty from '@styles'
import { useEffect, useState } from 'react'

import { DISCORD_REDIRECT_CHECK_USER_QUEST_CONDITION } from '@constants/discord'
import { generateAuthUrl } from '@helpers/discord'
import localStorageUtils from '@helpers/localStorageUtils'
import { useRouter } from 'next/router'
import { LS_QUEST_CARD_LOCATION } from '../../QuestCard.constants'
import type { QuestDetailModalProps } from './QuestDetailModal.types'

const QuestDetailModal = ({ isOpen, onClose, questType, quest }: QuestDetailModalProps) => {
  const { user } = useUserContext()
  const router = useRouter()

  // compute discord check here

  const [questFormEntry, setQuestFormEntry] = useState('')

  // TODO: THIS IS A POC STAGE STATE
  const [isDiscordQualified, setIsDiscordQualified] = useState(false)
  const [discordLoading, setDiscordLoading] = useState(false)

  const [discordCheckError, setDiscordCheckError] = useState('')

  const toast = useToast()

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
  }

  const handleDiscordCheckClick = () => {
    console.log('CONDITION DETAIL', quest.condition.conditionDetail)

    const redirectState = {
      ...quest.condition.conditionDetail,
      questId: quest.id,
    }

    console.log('REDIRECT STATE', redirectState)

    window.location.replace(
      generateAuthUrl(DISCORD_REDIRECT_CHECK_USER_QUEST_CONDITION, redirectState),
    )
  }

  const handleDiscordCheck = async () => {
    setDiscordLoading(true)
    setIsDiscordQualified(true)

    await completeQuest({ questId: quest.id, username: user?.username as string })

    setDiscordLoading(false)

    const destination = localStorageUtils.read(LS_QUEST_CARD_LOCATION)
    const formattedDestination = destination.split('?')

    localStorageUtils.write(LS_QUEST_CARD_LOCATION, '')

    console.log(destination)

    router.replace(formattedDestination[0])
  }

  const handleClose = () => {
    if (isDiscordQualified) {
      router.reload()
    } else onClose()
  }

  // intercept redirect and determine whether to process discord conditions
  useEffect(() => {
    const { discordCheck } = router.query

    if (discordCheck) {
      const discordState = JSON.parse(Buffer.from(discordCheck as string, 'base64').toString())
      console.log('DISCORD STATE', discordState)
      if (discordState.isMemberChecked && discordState.isRoleChecked) handleDiscordCheck()
      else {
        setDiscordCheckError(discordState.errorMsg)
      }
    }
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>{quest.name}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
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
              <FormLabel>Check conditions on Discord</FormLabel>
              <FormHelperText css={[globalSty.helperText]}>
                Click the button below to check your completion status in discord.
              </FormHelperText>

              {isDiscordQualified && (
                <HStack spacing={5} mb={5}>
                  <CheckIcon />
                  <Text>Discord conditions passed</Text>
                </HStack>
              )}

              <Button
                bgColor={discordPurple}
                onClick={handleDiscordCheckClick}
                disabled={isDiscordQualified}
                isLoading={discordLoading}
                width="100%"
              >
                <DiscordIcon />
                <Text ml={4}>Check Discord Conditions</Text>
              </Button>

              {discordCheckError.length > 0 && (
                <Text color={danger} mt={2}>
                  {discordCheckError}
                </Text>
              )}
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
