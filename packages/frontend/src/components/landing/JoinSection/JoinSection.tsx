import { Button, Text } from '@chakra-ui/react'

import SectionHeader from '@components/landing/SectionHeader'
import Ornament from '@components/shared/Ornament'

import { orange, primary, primaryHighlight } from '@constants/colors'
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
          <Button
            bgColor={primary}
            _hover={{ bg: primaryHighlight }}
            margin="24px 0"
            padding="0 64px"
            size="lg"
          >
            Get Polygon ID
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JoinSection
