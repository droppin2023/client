import { Badge, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { useUserPageContext } from '@context/UserPageContext'

import { QuestType, Status } from '@components/queries/common'
import QuestCard from '@components/shared/QuestCard'
import SectionHeader from '@components/shared/SectionHeader'

import { danger, lightBlue, primary, violet } from '@constants/colors'

const UserQuestSection = () => {
  const {
    userData: { userQuests },
  } = useUserPageContext()
  console.log(userQuests)
  const pendingQuests = userQuests.filter((item) => item.status === Status.pending)[0]?.quests || []
  const acceptedQuests =
    userQuests.filter((item) => item.status === Status.accepted)[0]?.quests || []
  const rejectedQuests =
    userQuests.filter((item) => item.status === Status.rejected)[0]?.quests || []
  // const claimedQuests = userQuests.filter((item) => item.status === Status.)[0]?.quests || []

  return (
    <VStack width="100%" align="left" spacing={10} mb={16}>
      <Text textAlign="left" width="100%">
        <SectionHeader title={'Community Engagement'} subtitle="" />
      </Text>
      <VStack alignItems={'flex-start'}>
        <Badge fontSize="xl" bg={violet} padding="4px 16px" borderRadius="6px">
          Pending
        </Badge>
        <SimpleGrid columns={4} gap={6} width="100%">
          {pendingQuests.map((item, index) => (
            <QuestCard key={index} quest={item} questType={QuestType.form} />
          ))}
        </SimpleGrid>
      </VStack>
      <VStack alignItems={'flex-start'}>
        <Badge fontSize="xl" bg={lightBlue} padding="4px 16px" borderRadius="6px">
          Accepted
        </Badge>
        <SimpleGrid columns={4} gap={6} width="100%">
          {acceptedQuests.map((item, index) => (
            <QuestCard key={index} quest={item} questType={QuestType.form} />
          ))}
        </SimpleGrid>
      </VStack>
      <VStack alignItems={'flex-start'}>
        <Badge fontSize="xl" bg={danger} padding="4px 16px" borderRadius="6px">
          Rejected
        </Badge>
        <SimpleGrid columns={4} gap={6} width="100%">
          {rejectedQuests.map((item, index) => (
            <QuestCard key={index} quest={item} questType={QuestType.form} />
          ))}
        </SimpleGrid>
      </VStack>
      {/* <VStack alignItems={'flex-start'}>
        <Badge fontSize="xl" bg={primary} padding="4px 16px" borderRadius="6px">
          Claimed
        </Badge>
        <SimpleGrid columns={4} gap={6} width="100%">
          {claimedQuests.map((item, index) => (
            <QuestCard key={index} quest={item} questType={QuestType.form} />
          ))}
        </SimpleGrid>
      </VStack> */}
    </VStack>
  )
}

export default UserQuestSection
