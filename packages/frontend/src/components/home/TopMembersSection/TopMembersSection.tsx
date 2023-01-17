import { Button, HStack } from '@chakra-ui/react'

import { primaryHighlight } from '@constants/colors'

import SideScrollRight from '@components/icons/SideScrollRight'
import MemberCard from '@components/shared/MemberCard'
import SectionHeader from '@components/shared/SectionHeader'

import * as sty from './TopMembersSection.styles'

// TODO: integrate real data
import { MOCK_USER_LIST } from '@mockData'

const TopMembersSection = () => {
  return (
    <div css={[sty.container]}>
      <SectionHeader title="Top members" subtitle="" />
      <HStack marginTop="36px">
        <HStack spacing={4}>
          {MOCK_USER_LIST.slice(0, 6).map((item, index) => (
            <MemberCard key={index} rank={0} name={item.name} avatar={item.img} />
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

export default TopMembersSection
