import { Text } from '@chakra-ui/react'

import SectionHeader from '@components/landing/SectionHeader'
import { orange } from '@constants/colors'

import * as sty from './QuestSection.styles'

const QuestSection = () => {
  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <SectionHeader
          title={
            <>
              Complete a quests and get your{' '}
              <Text as="span" color={orange}>
                Badge
              </Text>
            </>
          }
          subtitle="Droppin allows you to get reputation reward and quest badge, and be able to get your badge that makes you get easy access to DAO’s different activity based on your claim."
        />
        <>Carousel Placeholder</>
      </div>
    </div>
  )
}

export default QuestSection
