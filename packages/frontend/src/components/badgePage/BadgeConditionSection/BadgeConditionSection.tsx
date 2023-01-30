import { Badge, Flex, HStack, SimpleGrid, Skeleton, Spinner, Text, VStack } from '@chakra-ui/react'

import { background2, discordPurple, orange, pink, primary, secondary } from '@constants/colors'

import type { BadgeConditionSectionProps } from './BadgeConditionSection.types'

import Lock from '@components/icons/Lock'
import { QuestType } from '@components/queries/common'
import QuestCard from '@components/shared/QuestCard'

const BadgeConditionSection = ({
  requiredQuests,
  requiredEngageScore,
  requiredPrice,
  isLoading,
}: BadgeConditionSectionProps) => {
  console.log(requiredQuests)
  const questsDiscord =
    requiredQuests.filter((item) => item.questType === QuestType.discord)?.[0]?.questList || []
  const questsSubmitForm =
    requiredQuests.filter((item) => item.questType === QuestType.form)?.[0]?.questList || []
  return (
    <>
      <VStack alignItems={'flex-start'} spacing={0} width="70%">
        {' '}
        <Flex justifyContent={'space-between'} alignItems="center" width="100%">
          <Text fontSize="4xl" as="b" lineHeight="64px" color={primary}>
            <HStack spacing={2}>
              <Lock color={primary} />
              <span>Claim Condition</span>
            </HStack>
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems="center" width="100%">
          <Text fontSize="2xl" as="b" lineHeight="64px" color={orange}>
            <HStack spacing={2}>
              <span>Engagement</span>
            </HStack>
          </Text>
        </Flex>
        <VStack spacing={5} alignItems="flex-start">
          <Badge fontSize="xl" bg={discordPurple} padding="4px 16px" borderRadius="6px">
            Discord
          </Badge>

          {isLoading ? (
            <Flex width="100%" justifyContent={'center'}>
              <Spinner size="lg" />
            </Flex>
          ) : (
            <>
              {questsDiscord.length > 0 && (
                <SimpleGrid columns={4} gap={6} width="100%">
                  {isLoading && <Spinner size="lg" />}
                  {questsDiscord.map((item, index) => (
                    <QuestCard key={index} quest={item} questType={QuestType.discord} />
                  ))}
                </SimpleGrid>
              )}
              {questsDiscord.length === 0 && (
                <Text color={secondary} as="b">
                  There are no Discord Quests yet for this Badge !
                </Text>
              )}
            </>
          )}

          <Badge fontSize="xl" bg={pink} padding="4px 16px" borderRadius="6px">
            Submit Link
          </Badge>

          {isLoading ? (
            <Flex width="100%" justifyContent={'center'}>
              <Spinner size="lg" />
            </Flex>
          ) : (
            <>
              {questsSubmitForm.length > 0 && (
                <SimpleGrid columns={4} gap={6} width="100%">
                  {questsSubmitForm.map((item, index) => (
                    <QuestCard key={index} quest={item} questType={QuestType.form} />
                  ))}
                </SimpleGrid>
              )}
              {questsSubmitForm.length === 0 && (
                <Text color={secondary} as="b">
                  There are no Form Submit Quests yet for this Badge !
                </Text>
              )}
            </>
          )}
        </VStack>
        <VStack alignItems={'flex-start'} spacing={0}>
          <Flex justifyContent={'space-between'} alignItems="center" width="100%">
            <Text fontSize="2xl" as="b" lineHeight="64px" color={orange}>
              <HStack spacing={2}>
                <span>Engagement</span>
              </HStack>
            </Text>
          </Flex>
        </VStack>
        <Skeleton isLoaded={!isLoading} width="100%">
          <Flex
            bgColor={background2}
            borderRadius="16px"
            padding="16px"
            width="100%"
            justifyContent={'space-between'}
          >
            <HStack spacing={10} alignItems="flex-start">
              <Text
                textAlign={'right'}
                as="b"
              >{`Should be at least ${requiredEngageScore.number} ${requiredEngageScore.unit}`}</Text>
            </HStack>
          </Flex>
        </Skeleton>
        <VStack alignItems={'flex-start'} spacing={0}>
          <Flex justifyContent={'space-between'} alignItems="center" width="100%">
            <Text fontSize="2xl" as="b" lineHeight="64px" color={orange}>
              <HStack spacing={2}>
                <span>Price</span>
              </HStack>
            </Text>
          </Flex>
        </VStack>
        <Skeleton isLoaded={!isLoading} width="100%">
          <Flex
            bgColor={background2}
            borderRadius="16px"
            padding="16px"
            width="100%"
            justifyContent={'space-between'}
          >
            <Text textAlign={'right'} as="b">{`${requiredPrice.number}`}</Text>
            <Text textAlign={'right'} as="b">{`${requiredPrice.unit}`}</Text>
          </Flex>
        </Skeleton>
      </VStack>
    </>
  )
}

export default BadgeConditionSection
