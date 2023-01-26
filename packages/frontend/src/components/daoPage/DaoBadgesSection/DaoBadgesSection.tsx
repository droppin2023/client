import { useState } from 'react'

import { Badge, Button, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { background2, discordPurple, pink, primary, primaryHighlight } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import Award from '@components/icons/Award'
import QuestBadge from '@components/shared/QuestBadge'
import QuestCard from '../../shared/QuestCard'

import BadgeForm from '../../shared/BadgeForm'
import QuestForm from './components/QuestForm'
import type { DaoBadgesSectionProps } from './DaoBadgesSection.types'

// TODO: integrate real data
import { QuestType } from '@components/queries/common'
import { MOCK_DAO_LIST } from '@mockData'
import DaoCard from '@components/shared/DaoCard'

const DaoBadgesSection = ({ badges, questsDiscord, questsSubmitForm }: DaoBadgesSectionProps) => {
  const { repUnit, isAdmin, id } = useDaoPageContext()

  const [isCreateQuestOpen, setIsCreateQuestOpen] = useState(false)
  const [isCreateBadgeOpen, setIsCreateBadgeOpen] = useState(false)

  return (
    <>
      <VStack alignItems={'flex-start'} spacing={8}>
        <SimpleGrid columns={5} gap={8}>
          {badges.map((item, index) => (
            <QuestBadge key={index} name={item.name} isLocked={false} img={item.logo} />
          ))}
          {isAdmin && (
            <Flex
              bg={background2}
              color={primary}
              width="200px"
              height="200px"
              borderRadius="20px"
              border={`2px dashed ${primary}`}
              direction="column"
              alignItems="center"
              justifyContent="center"
              onClick={() => setIsCreateBadgeOpen(true)}
              _hover={{
                cursor: 'pointer',
              }}
            >
              <Text fontSize="6xl">+</Text>
              <Text>Create badge</Text>
            </Flex>
          )}
        </SimpleGrid>
        <Flex justifyContent={'space-between'} alignItems="center" width="100%">
          <Text fontSize="4xl" as="b" lineHeight="64px" color={primary}>
            <HStack spacing={2}>
              <Award />
              <span>Quests</span>
            </HStack>
          </Text>
          {isAdmin && (
            <Button
              leftIcon={<Text>+</Text>}
              variant="filled"
              bgColor={primary}
              _hover={{ bg: primaryHighlight }}
              onClick={() => setIsCreateQuestOpen(true)}
            >
              Add Quest
            </Button>
          )}
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
      <QuestForm
        groupId={id}
        isOpen={isCreateQuestOpen}
        onClose={() => setIsCreateQuestOpen(false)}
      />
      <BadgeForm
        isOpen={isCreateBadgeOpen}
        onClose={() => setIsCreateBadgeOpen(false)}
        repUnit={repUnit}
        questsDiscord={questsDiscord}
        questsSubmitForm={questsSubmitForm}
        groupId={id}
      />
    </>
  )
}

export default DaoBadgesSection
