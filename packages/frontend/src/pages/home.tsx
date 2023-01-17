import type { NextPage } from 'next'

import { VStack } from '@chakra-ui/react'
import TopBadgesSection from '@components/home/TopBadgesSection'
import TopCommunitySection from '@components/home/TopCommunitySection'
import TopMembersSection from '@components/home/TopMembersSection'

const HomePage: NextPage = () => {
  return (
    <>
      <VStack width="75%" alignSelf={'center'} alignItems={'left'}>
        <TopCommunitySection />
        <TopBadgesSection />
        <TopMembersSection />
      </VStack>
    </>
  )
}

export default HomePage
