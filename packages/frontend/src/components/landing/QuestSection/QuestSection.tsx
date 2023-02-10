import { HStack, Text, VStack } from '@chakra-ui/react'

import { orange, primary } from '@constants/colors'

import Award from '@components/icons/Award'
import SideScrollRight from '@components/icons/SideScrollRight'
import QuestBadge from '@components/shared/QuestBadge'

import SectionHeader from '@components/shared/SectionHeader'

import * as sty from './QuestSection.styles'

// TODO: integrate real data
import { MOCK_BADGE_LIST } from '@mockData'

const QuestSection = () => {
  return (
    <div css={[sty.background]}>
      <VStack spacing={3} css={[sty.container]} alignItems="left">
        <SectionHeader
          title={
            <>
              Complete quests and get your{' '}
              <Text as="span" color={orange}>
                Badges
              </Text>
            </>
          }
          subtitle="Your social credit record will be standardized here, but it can be composable, transferable. Other community recognize your work in here, they can create engagements and tasks with different standard to certain groups of verified people. — Diamonds, Multi-Facet Proxy"
        />
        <div>
          <Text fontSize="2xl" as="b" lineHeight="64px" color={primary}>
            <HStack spacing={2}>
              <Award />
              <span>Recent Badges</span>
            </HStack>
          </Text>
          <HStack spacing={16} alignItems="center">
            <HStack spacing={4} alignItems="flex-start">
              {MOCK_BADGE_LIST.slice(0, 4).map((item, index) => (
                <QuestBadge
                  key={index}
                  daoName={item.daoName}
                  name={item.name}
                  recentActivity={item.recentActivity}
                  isLocked={item.isLocked}
                  img={item?.img}
                />
              ))}
            </HStack>
            <SideScrollRight width="48px" height="48px" />
          </HStack>
        </div>
      </VStack>
    </div>
  )
}

export default QuestSection
