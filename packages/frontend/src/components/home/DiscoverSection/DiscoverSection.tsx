// import { ArrowForwardIcon } from "@chakra-ui/icons";
import { HStack, Text } from '@chakra-ui/react'

import DAOCard from '@components/shared/DAOCard'

import SectionHeader from '@components/home/SectionHeader'

import * as sty from './DiscoverSection.styles'

const DiscoverSection = () => {
  const renderCTAIcon = () => (
    <div css={[sty.ctaIcon]}>
      <div />
      <div />
      <div></div>
    </div>
  )

  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <SectionHeader
          title="Discover most active DAOs"
          subtitle="droppin allows you to evaluate different DAOs based on real-time activities."
        />
        <div css={[sty.carouselSection]}>
          <HStack spacing="16px">
            <DAOCard name="Lepak DAO" memberCount={190} repScore={3.5} order={1} />
            <DAOCard name="Mamak DAO" memberCount={290} repScore={3.5} order={2} />
            <DAOCard name="Makan DAO" memberCount={390} repScore={3.5} order={3} />
          </HStack>
          <div>
            <Text fontSize={'3xl'} as="b">
              Try droppin to see more !
            </Text>
            {renderCTAIcon()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection
