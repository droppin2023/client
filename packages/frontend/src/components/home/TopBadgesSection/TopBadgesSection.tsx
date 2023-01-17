import { Button, HStack } from '@chakra-ui/react'

import { primaryHighlight } from '@constants/colors'

import SideScrollRight from '@components/icons/SideScrollRight'
import QuestBadge from '@components/shared/QuestBadge'
import SectionHeader from '@components/shared/SectionHeader'

import * as sty from './TopBadgesSection.styles'

// TODO: integrate real data
import { MOCK_BADGE_LIST } from '@mockData'

const TopBadgesSection = () => {
  return (
    <div css={[sty.container]}>
      <SectionHeader title="Top badges" subtitle="" />
      <HStack marginTop="36px">
        <HStack spacing={4}>
          {MOCK_BADGE_LIST.slice(0, 5).map((item, index) => (
            <QuestBadge
              key={index}
              daoName={item.daoName}
              name={item.name}
              recentActivity={item.recentActivity}
              isLocked={item.isLocked}
              minter={item.minter}
            />
          ))}
        </HStack>
        <Button
          variant="ghost"
          bg="transparent"
          margin="0"
          padding="0"
          position="relative"
          left="-24px"
          _hover={{ color: primaryHighlight }}
        >
          <SideScrollRight width="48px" height="48px" />
        </Button>
      </HStack>
    </div>
  )
}

export default TopBadgesSection
