import { Badge, Button, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { DISCORD, LINK } from '@constants/categories'
import { discordPurple, pink, primary, primaryHighlight, secondaryWeak } from '@constants/colors'

import Award from '@components/icons/Award'
import DaoCard from '@components/shared/DaoCard'
import QuestBadge from '@components/shared/QuestBadge'
import QuestCard from './components/QuestCard'

import type { DaoBadgesSectionProps } from './DaoBadgesSection.types'

// TODO: integrate real data
import { MOCK_DAO_LIST } from '@mockData'

const DaoBadgesSection = ({ badges, quests }: DaoBadgesSectionProps) => {
  return (
    <VStack alignItems={'flex-start'} spacing={8}>
      <SimpleGrid columns={4} gap={8}>
        {badges.map((item, index) => (
          <QuestBadge key={index} name={item.name} isLocked={false} />
        ))}

        {/* TODO: onclick functionality */}
        <Flex
          bg={secondaryWeak}
          color={primary}
          width="200px"
          height="200px"
          borderRadius="20px"
          border={`2px dashed ${primary}`}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="6xl">+</Text>
          <Text>Create badge</Text>
        </Flex>
      </SimpleGrid>
      <Flex justifyContent={'space-between'} alignItems="center" width="100%">
        <Text fontSize="4xl" as="b" lineHeight="64px" color={primary}>
          <HStack spacing={2}>
            <Award />
            <span>Quests</span>
          </HStack>
        </Text>
        <Button
          leftIcon={<Text>+</Text>}
          variant="filled"
          bgColor={primary}
          _hover={{ bg: primaryHighlight }}
        >
          Add Quest
        </Button>
      </Flex>
      <VStack spacing={5} alignItems="flex-start">
        <Badge fontSize="xl" bg={discordPurple} padding="4px 16px" borderRadius="6px">
          Discord
        </Badge>
        <SimpleGrid columns={3} gap={8} width="100%">
          {quests
            .filter((item) => item.type === DISCORD)
            .map((item, index) => (
              <QuestCard key={index} name={item.name} reward={item.reward} />
            ))}
        </SimpleGrid>
        <Badge fontSize="xl" bg={pink} padding="4px 16px" borderRadius="6px">
          Submit Link
        </Badge>
        <SimpleGrid columns={3} gap={8} width="100%">
          {quests
            .filter((item) => item.type === LINK)
            .map((item, index) => (
              <QuestCard key={index} name={item.name} reward={item.reward} />
            ))}
        </SimpleGrid>
      </VStack>
      <Text fontSize="4xl" as="b" lineHeight="64px" color={primary}>
        <span>You might also like</span>
      </Text>
      <HStack marginTop="36px">
        <HStack spacing={5}>
          {MOCK_DAO_LIST.slice(0, 5).map((item, index) => (
            <DaoCard
              name={item.name}
              key={index}
              memberCount={item.memberCount}
              memberList={item.members}
              repScore={item.repScore}
              repUnit={item.repUnit}
              description={item.description.substring(0, 40) + '...'}
            />
          ))}
        </HStack>
      </HStack>
    </VStack>
  )
}

export default DaoBadgesSection
