import { HStack, Text } from '@chakra-ui/react'

import SideScrollRight from '@components/icons/SideScrollRight'
import MemberCard from '@components/shared/MemberCard'
import SectionHeader from '@components/shared/SectionHeader'
import { orange } from '@constants/colors'

import * as sty from './ActiveMembersSection.styles'

// TODO: integrate real data
import { MOCK_USER_LIST } from '@mockData'

const ActiveMembersSection = () => {
  return (
    <div css={[sty.background]}>
      <div css={[sty.container]}>
        <SectionHeader
          title={
            <>
              <Text as="span" color={orange}>
                Top
              </Text>{' '}
              Active Members
            </>
          }
          subtitle=""
        />
        <HStack spacing={16} margin="24px 0" alignItems={'center'}>
          <HStack spacing={16}>
            {MOCK_USER_LIST.slice(0, 3).map((item, index) => (
              <MemberCard key={index} rank={index + 1} avatar={item.img} name={item.name} />
            ))}
          </HStack>
          <SideScrollRight width="48px" height="48px" />
        </HStack>
      </div>
    </div>
  )
}

export default ActiveMembersSection
