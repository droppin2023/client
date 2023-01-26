import { Badge, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { background2, primary, orange, discordPurple, pink } from '@constants/colors'

import type { BadgeConditionSectionProps } from './BadgeConditionSection.types'

import { QuestType } from '@components/queries/common'
import Lock from '@components/icons/Lock'
import QuestCard from '@components/shared/QuestCard'
import Award from '@components/icons/Award'

const BadgeConditionSection = ({
  requiredQuests,
  requiredEngageScore,
  requiredPrice,
}: BadgeConditionSectionProps) => {
  console.log(requiredQuests)
  const questsDiscord = requiredQuests[0]
  const questsSubmitForm = requiredQuests[1]
  return (
    <>
      <VStack alignItems={'flex-start'} spacing={0}>
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
          <SimpleGrid columns={4} gap={6} width="100%">
            {questsDiscord.questList.map((item, index) => (
              <QuestCard key={index} quest={item} questType={QuestType.discord} />
            ))}
          </SimpleGrid>
          <Badge fontSize="xl" bg={pink} padding="4px 16px" borderRadius="6px">
            Submit Link
          </Badge>
          <SimpleGrid columns={4} gap={6} width="100%">
            {questsSubmitForm.questList.map((item, index) => (
              <QuestCard key={index} quest={item} questType={QuestType.form} />
            ))}
          </SimpleGrid>
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
        <VStack alignItems={'flex-start'} spacing={0}>
          <Flex justifyContent={'space-between'} alignItems="center" width="100%">
            <Text fontSize="2xl" as="b" lineHeight="64px" color={orange}>
              <HStack spacing={2}>
                <span>Price</span>
              </HStack>
            </Text>
          </Flex>
        </VStack>
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
      </VStack>
    </>
  )
}

export default BadgeConditionSection
