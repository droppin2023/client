import type { NextPage } from 'next'

import { VStack } from '@chakra-ui/react'
import TopCommunitySection from '@components/home/TopCommunitySection'

const HomePage: NextPage = () => {
  return (
    <>
      <VStack width="85%" alignSelf={'center'} alignItems={'left'}>
        <TopCommunitySection />
      </VStack>
    </>
  )
}

export default HomePage
