// import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, HStack, Text } from '@chakra-ui/react'

import People from '@components/icons/People'
import SideScrollRight from '@components/icons/SideScrollRight'
import DaoCard from '@components/shared/DaoCard'

import SectionHeader from '@components/shared/SectionHeader'

import { primaryHighlight } from '@constants/colors'
import * as sty from './DiscoverSection.styles'

// TODO: integrate real data
import { MOCK_DAO_LIST } from '@mockData'

const DiscoverSection = () => {
  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <SectionHeader
          title={
            <HStack spacing={2}>
              <People />
              <div>Discover most active Communities</div>
            </HStack>
          }
          subtitle="Droppin allows you to evaluate different Communities based on real-time activities"
        />
        <div css={[sty.carouselSection]}>
          <HStack spacing="16px">
            {MOCK_DAO_LIST.slice(0, 3).map((item, index) => (
              <DaoCard
                name={item.name}
                key={index}
                memberCount={item.memberCount}
                memberList={item.members}
                repScore={item.repScore}
                repUnit={item.repUnit}
                order={index + 1}
                imgUrl={item?.img}
                showBorder
              />
            ))}
          </HStack>
          <Button variant="ghost" bg="transparent" _hover={{ color: primaryHighlight }}>
            <HStack spacing="24px">
              <SideScrollRight width="48px" height="48px" />
              <Text fontSize={'3xl'}>Try droppin to see more !</Text>
            </HStack>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection
