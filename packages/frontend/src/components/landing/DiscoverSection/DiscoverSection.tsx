/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, HStack, Text } from '@chakra-ui/react'

import People from '@components/icons/People'
import SideScrollRight from '@components/icons/SideScrollRight'

//@ts-ignore
import DaoCard from '@components/shared/DAOCard'

import SectionHeader from '@components/shared/SectionHeader'

import { primaryHighlight } from '@constants/colors'
import * as sty from './DiscoverSection.styles'

// TODO: integrate real data
import { orange } from '@constants/colors'
import { MOCK_DAO_LIST } from '@mockData'

const DiscoverSection = () => {
  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <SectionHeader
          title={
            <HStack spacing={2}>
              <People />
              <Text>
                Track and analyze{' '}
                <Text as="span" color={orange}>
                  High-Quality Engagement
                </Text>{' '}
                in your Community
              </Text>
            </HStack>
          }
          subtitle='Engagements are not the same. It is hard to define what is "high level". Our protocol can help you define your community standards better.'
        />
        <div css={[sty.carouselSection]}>
          <HStack spacing="16px" alignItems={'flex-start'}>
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
