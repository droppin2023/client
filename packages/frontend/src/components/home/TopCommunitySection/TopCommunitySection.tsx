import { Button, HStack } from '@chakra-ui/react'

import { primaryHighlight } from '@constants/colors'

import SideScrollRight from '@components/icons/SideScrollRight'
import DAOCard from '@components/shared/DAOCard'
import SectionHeader from '@components/shared/SectionHeader'

import * as sty from './TopCommunitySection.styles'

// TODO: integrate real data
import { MOCK_DAO_LIST } from '@mockData'

const TopCommunitySection = () => {
  return (
    <div css={[sty.container]}>
      <SectionHeader title="Top communities" subtitle="" />
      <HStack marginTop="36px">
        <HStack spacing={5}>
          {MOCK_DAO_LIST.slice(0, 6).map((item, index) => (
            <DAOCard
              name={item.name}
              key={index}
              memberCount={item.memberCount}
              memberList={item.members}
              repScore={item.repScore}
              repUnit={item.repUnit}
              description={item.description.substring(0, 40) + '...'}
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

export default TopCommunitySection
