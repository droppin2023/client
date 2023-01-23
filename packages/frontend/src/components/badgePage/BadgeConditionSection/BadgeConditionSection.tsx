import { Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { background2, primary, orange } from '@constants/colors'

import type { BadgeConditionSectionProps } from './BadgeConditionSection.types'

import { QuestType } from '@components/queries/common'
import Lock from '@components/icons/Lock'
import QuestCard from '@components/shared/QuestCard'

const BadgeConditionSection = ({
  requiredQuests,
  requiredEngageScore,
  requiredPrice,
}: BadgeConditionSectionProps) => {
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
        <VStack alignItems={'flex-start'} spacing={0}>
          <Flex justifyContent={'space-between'} alignItems="center" width="100%">
            <Text fontSize="2xl" as="b" lineHeight="64px" color={orange}>
              <HStack spacing={2}>
                <span>Quests</span>
              </HStack>
            </Text>
          </Flex>
          <VStack spacing={5} alignItems="flex-start">
            <SimpleGrid columns={4} gap={6} width="100%">
              {requiredQuests.map((item, index) => (
                <QuestCard
                  key={index}
                  id={item.id}
                  name={item.name}
                  reward={item.engageScore.number}
                  repUnit={item.engageScore.unit}
                  questType={QuestType.discord}
                />
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
      </VStack>
    </>
  )
}

export default BadgeConditionSection
