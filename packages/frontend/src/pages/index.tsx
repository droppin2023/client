import { VStack } from '@chakra-ui/react'
import ActiveMembersSection from '@components/landing/ActiveMembersSection'
import CoverSection from '@components/landing/CoverSection'
import DiscoverSection from '@components/landing/DiscoverSection'
import JoinSection from '@components/landing/JoinSection'
import QuestSection from '@components/landing/QuestSection'

import type { NextPage } from 'next'
import 'twin.macro'

const LandingPage: NextPage = () => {
  return (
    <VStack spacing="120px">
      <CoverSection />
      <VStack margin="200px 0" overflowX={'hidden'}>
        <DiscoverSection />
        <JoinSection />
        <QuestSection />
        <ActiveMembersSection />
      </VStack>
    </VStack>
  )
}

export default LandingPage
