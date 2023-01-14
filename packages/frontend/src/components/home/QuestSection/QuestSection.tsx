import SectionHeader from '@components/home/SectionHeader'

import * as sty from './QuestSection.styles'

const QuestSection = () => {
  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <SectionHeader
          title="Complete a quests and claim level SBTs"
          subtitle="droppin allows you to get XP reward and quest badge, and be able to claim level SBTs that makes you get easy access to DAO’s different activity based on your claim."
        />
        <>Carousel Placeholder</>
      </div>
    </div>
  )
}

export default QuestSection
