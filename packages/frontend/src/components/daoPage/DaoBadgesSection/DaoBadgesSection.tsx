/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react'

import { Badge, Button, Flex, HStack, SimpleGrid, Spinner, Text, VStack } from '@chakra-ui/react'

import {
  background2,
  discordPurple,
  pink,
  primary,
  primaryHighlight,
  secondary,
} from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import Award from '@components/icons/Award'

// @ts-ignore
import DaoCard from '@components/shared/DAOCard'
import QuestBadge from '@components/shared/QuestBadge'
import QuestCard from '@components/shared/QuestCard'

import BadgeForm from '@components/shared/BadgeForm'
import QuestForm from '@components/shared/QuestForm'
import type { DaoBadgesSectionProps } from './DaoBadgesSection.types'

import { MOCK_DAO_LIST } from '@mockData'
import { QuestType } from '@queries/common'
import { useRouter } from 'next/router'

const DaoBadgesSection = ({
  badges,
  questsDiscord,
  questsSubmitForm,
  isLoading,
  issuerId,
  token,
  email,
  password,
}: DaoBadgesSectionProps) => {
  const router = useRouter()

  const { repUnit, isAdmin, id } = useDaoPageContext()

  const [isCreateQuestOpen, setIsCreateQuestOpen] = useState(false)
  const [isCreateBadgeOpen, setIsCreateBadgeOpen] = useState(false)

  //TODO: hardcoded modal

  const renderDiscordQuests = () => {
    if (isLoading) return <Spinner size="lg" />

    return (
      <>
        {questsDiscord.length > 0 ? (
          <SimpleGrid columns={4} gap={6} width="100%">
            {questsDiscord.map((item, index) => (
              <QuestCard key={index} quest={item} questType={QuestType.discord} />
            ))}
          </SimpleGrid>
        ) : (
          <Text color={secondary} as="b">
            There are no Discord Quests yet for this Badge !
          </Text>
        )}
      </>
    )
  }

  const renderSubmitFormQuests = () => {
    if (isLoading) return <Spinner size="lg" />

    return (
      <>
        {questsSubmitForm.length > 0 ? (
          <SimpleGrid columns={4} gap={6} width="100%">
            {questsSubmitForm.map((item, index) => (
              <QuestCard key={index} quest={item} questType={QuestType.form} />
            ))}
          </SimpleGrid>
        ) : (
          <Text color={secondary} as="b">
            There are no Discord Quests yet for this Badge !
          </Text>
        )}
      </>
    )
  }

  return (
    <>
      <VStack alignItems={'flex-start'} spacing={8}>
        <SimpleGrid columns={5} gap={8}>
          {badges.map((item, index) => (
            <QuestBadge
              onClick={() => router.push(`/badge/${item.id}`)}
              key={index}
              name={item.name}
              isLocked={false}
              img={item.image}
            />
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
          {renderDiscordQuests()}
          <Badge fontSize="xl" bg={pink} padding="4px 16px" borderRadius="6px">
            Submit Link
          </Badge>
          {renderSubmitFormQuests()}
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
                // NOTE: this is a random url
                imgUrl={`https://picsum.photos/id/${index * 10}/200`}
              />
            ))}
          </HStack>
        </HStack>
      </VStack>
      {isCreateQuestOpen && (
        <QuestForm
          groupId={id}
          isOpen={true}
          onClose={() => setIsCreateQuestOpen(false)}
          repUnit={repUnit}
        />
      )}
      <BadgeForm
        isOpen={isCreateBadgeOpen}
        onClose={() => setIsCreateBadgeOpen(false)}
        repUnit={repUnit}
        questsDiscord={questsDiscord}
        questsSubmitForm={questsSubmitForm}
        groupId={id}
        issuerId={issuerId}
        token={token}
        email={email}
        password={password}
      />
    </>
  )
}

export default DaoBadgesSection
