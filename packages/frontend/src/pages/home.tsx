import type { NextPage } from 'next'

import { VStack } from '@chakra-ui/react'
import BannerCarousel from '@components/home/BannerCarousel'
import ForHackersSection from '@components/home/ForHackersSection'
import TopBadgesSection from '@components/home/TopBadgesSection'
import TopCommunitySection from '@components/home/TopCommunitySection'
import TopMembersSection from '@components/home/TopMembersSection'

const HomePage: NextPage = () => {
  return (
    <VStack spacing={10}>
      <BannerCarousel />
      <VStack width="75%" alignSelf={'center'} alignItems={'left'}>
        <TopCommunitySection />
        <TopBadgesSection />
        <TopMembersSection />
        <ForHackersSection />
      </VStack>
    </VStack>
  )
}

export default HomePage
