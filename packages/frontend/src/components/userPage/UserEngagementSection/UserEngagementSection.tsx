import { SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { useUserPageContext } from '@context/UserPageContext'

import SectionHeader from '@components/shared/SectionHeader'

import UserEngagementCard from './components/UserEngagementCard'

const UserEngagementSection = () => {
  const {
    userData: { engageScoresAndCommunity },
  } = useUserPageContext()

  return (
    <VStack width="100%" align="left" spacing={10}>
      <Text textAlign="left" width="100%">
        <SectionHeader title={'Community Engagement'} subtitle="" />
      </Text>
      <SimpleGrid spacing={5} columns={2}>
        {engageScoresAndCommunity.map((item, index) => (
          <UserEngagementCard
            key={index}
            engageScore={item.engageScore}
            community={item.community}
          />
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default UserEngagementSection
