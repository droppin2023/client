import CoverSection from '@components/home/CoverSection'
import DiscoverSection from '@components/home/DiscoverSection'
import JoinSection from '@components/home/JoinSection'
import QuestSection from '@components/home/QuestSection'

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
