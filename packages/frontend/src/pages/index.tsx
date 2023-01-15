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
      <DiscoverSection />
      <JoinSection />
      <QuestSection />
    </>
  )
}

export default HomePage
