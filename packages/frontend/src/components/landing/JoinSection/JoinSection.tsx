import { Text } from '@chakra-ui/react'

import Ornament from '@components/shared/Ornament'
import SectionHeader from '@components/shared/SectionHeader'

import { orange } from '@constants/colors'
import * as sty from './JoinSection.styles'

const JoinSection = () => {
  return (
    <div css={[sty.background]}>
      <Ornament variant="stars" top="-200px" right="-500px" />
      <div css={[sty.container]}>
        <div>
          <SectionHeader
            title={
              <>
                <Text as="span" color={orange}>
                  Join Community
                </Text>{' '}
                with most certain way – ZK
              </>
            }
            subtitle="Droppin allows you to join community based on your zk-identity ( powered by Polygon ID ). You can use your self sovereign identity to connect different communities quests "
          />
        </div>
      </div>
    </div>
  )
}

export default JoinSection
