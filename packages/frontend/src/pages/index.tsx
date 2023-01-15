import { VStack } from '@chakra-ui/react'
import ActiveMembersSection from '@components/landing/ActiveMembersSection'
import CoverSection from '@components/landing/CoverSection'
import DiscoverSection from '@components/landing/DiscoverSection'
import JoinSection from '@components/landing/JoinSection'
import QuestSection from '@components/landing/QuestSection'

import type { NextPage } from 'next'
import 'twin.macro'

const HomePage: NextPage = () => {
  return (
    <>
      <CoverSection />
      <VStack margin="100px 0">
        <DiscoverSection />
        <JoinSection />
        <QuestSection />
        <ActiveMembersSection />
      </VStack>
    </>
  )
}

export default HomePage
