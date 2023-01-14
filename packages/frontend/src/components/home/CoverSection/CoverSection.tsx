import { Button, Text } from '@chakra-ui/react'

import * as sty from './CoverSection.styles'

const CoverSection = () => {
  return (
    <div css={[sty.container]}>
      <div css={[sty.content]}>
        <Text fontSize="6xl" as="b" lineHeight={1}>
          Explore, Join DAOs and get Rewards from activities.
        </Text>
        <Text fontSize="2xl">
          Discover new and interesting DAOs and join them with simple but secure zk-based claims.
          And get different rewards to enjoy on-chain native social life! – XP, Badges, SBTs.
        </Text>
        <div css={[sty.btnContainer]}>
          <Button size="lg" colorScheme="orange" width="50%">
            Try it now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CoverSection
