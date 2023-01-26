import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Badge,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import QuestBadge from '@components/shared/QuestBadge'
import SectionHeader from '@components/shared/SectionHeader'
import { NETWORKS } from '@constants/categories'
import {
  background2,
  discordPurple,
  pink,
  primary,
  primaryHighlight,
  secondary,
} from '@constants/colors'
import { useRef, useState } from 'react'
import { FormStepCommonProps } from '../types'

import { QuestType } from '@components/queries/common'
import DroppinRadioGroup from '@components/shared/DroppinRadioGroup'
import QuestCard from '@components/shared/QuestCard'
import QuestForm from '@components/shared/QuestForm'
import { useCreateCommunityContext } from '@context/CreateCommunityContext'
import * as globalSty from '@styles'

const CreateCommunityOnChainForm = ({ onNext, onPrev }: FormStepCommonProps) => {
  const { repUnit, setRepUnit, questsDiscord, questsForm } = useCreateCommunityContext()
  const [isQuestFormOpen, setIsQuestFormOpen] = useState(false)
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

  const confirmationCancelRef = useRef<HTMLButtonElement>()

  const handlePrev = () => {
    if (onPrev) onPrev()
  }

  const handleFinish = () => {
    if (onNext) onNext()
  }

  return (
    <>
      <VStack align="left" width="100%" spacing={5}>
        <SectionHeader title="Community on-chain setup" subtitle="" />
        <VStack align="left" spacing={1}>
          <Text as="b" lineHeight={1}>
            What is Community Badge ?
          </Text>
          <Text color={secondary}>
            It is a basic identity verification. When user want to join the community, they have to
            submit name, discord ID. The community admin can check and confirm the pending users to
            members.
          </Text>
        </VStack>

        <FormControl mt={4}>
          <FormLabel>Set default badge</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            To join the community, member have to claim this badge
          </FormHelperText>
          <QuestBadge name="NewBie" isLocked={false} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Set Quests</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Quests define your community milestones, members get rewarded accordingly.
          </FormHelperText>
          <VStack alignItems="flex-start" spacing={5}>
            <Button
              variant="outline"
              color={primary}
              borderColor={primary}
              onClick={() => setIsQuestFormOpen(true)}
            >
              + Add Quest
            </Button>
            {questsDiscord.length > 0 && (
              <>
                <Badge fontSize="xl" bg={discordPurple} padding="4px 16px" borderRadius="6px">
                  Discord
                </Badge>
                <SimpleGrid columns={4} gap={6} width="100%">
                  {questsDiscord.map((item, index) => (
                    <QuestCard
                      key={index}
                      id={item.id}
                      name={item.name}
                      reward={item.engageScore.number}
                      repUnit={item.engageScore.unit}
                      questType={QuestType.discord}
                      showNoDetail
                    />
                  ))}
                </SimpleGrid>
              </>
            )}

            {questsForm.length > 0 && (
              <>
                <Badge fontSize="xl" bg={pink} padding="4px 16px" borderRadius="6px">
                  Submit Link
                </Badge>

                <SimpleGrid columns={4} gap={6} width="100%">
                  {questsForm.map((item, index) => (
                    <QuestCard
                      key={index}
                      id={item.id}
                      name={item.name}
                      reward={item.engageScore.number}
                      repUnit={item.engageScore.unit}
                      questType={QuestType.form}
                      showNoDetail
                    />
                  ))}
                </SimpleGrid>
              </>
            )}
          </VStack>
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Name your community’s Engagement score</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Members can get Community Engagement score after they complete their quest
          </FormHelperText>
          <Input
            value={repUnit}
            onChange={(e) => setRepUnit(e.target.value)}
            variant="filled"
            placeholder="e.g. DROP"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Blockchain</FormLabel>
          <FormHelperText css={[globalSty.helperText]}>
            Select the blockchain where you’d like new badges from this community to be added by
            default
          </FormHelperText>
          <DroppinRadioGroup
            options={NETWORKS}
            onChange={(nextValue: string) => {}}
            defaultValue={'Polygon'}
          />
        </FormControl>

        <Flex justifyContent="space-between" mt={8}>
          <Button
            onClick={handlePrev}
            alignSelf="flex-end"
            bg={primary}
            _hover={{ bg: primaryHighlight }}
            size="lg"
          >
            Prev
          </Button>

          <Button
            onClick={() => setIsConfirmationOpen(true)}
            alignSelf="flex-end"
            bg={primary}
            _hover={{ bg: primaryHighlight }}
            size="lg"
          >
            Finish
          </Button>
        </Flex>
      </VStack>
      <AlertDialog
        isOpen={isConfirmationOpen}
        leastDestructiveRef={confirmationCancelRef}
        onClose={() => setIsConfirmationOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={background2}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Comfirm submission
            </AlertDialogHeader>

            <AlertDialogBody>
              Please make sure you input the correct information before submitting!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={confirmationCancelRef} onClick={() => setIsConfirmationOpen(false)}>
                Cancel
              </Button>
              <Button bg={primary} _hover={{ bg: primaryHighlight }} onClick={handleFinish} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <QuestForm isOpen={isQuestFormOpen} onClose={() => setIsQuestFormOpen(false)} />
    </>
  )
}

export default CreateCommunityOnChainForm
