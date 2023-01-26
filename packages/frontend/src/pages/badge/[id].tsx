import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'

import { primary } from '@constants/colors'
import { DaoPageProvider } from '@context/DaoPageContext'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

import { QuestType } from '@components/queries/common'
import { MOCK_BADGE, MOCK_CLAIMED_BADGE } from '@mockData'
import BadgeOverview from '@components/badgePage/BadgeOverview'
import BadgeConditionSection from '@components/badgePage/BadgeConditionSection'
import BadgeClaimedSection from '@components/badgePage/BadgeClaimedSection'

const BadgePage = ({ id }: { id: number }) => {
  // TODO: integrate real data
  const mockBadge = MOCK_BADGE
  const mockClamedBadge = MOCK_CLAIMED_BADGE

  return (
    <VStack spacing="40px" marginBottom="100px">
      {/* TODO: integrate discord */}
      <BadgeOverview
        id={mockBadge.id}
        name={mockBadge.name}
        symbol={mockBadge.symbol}
        logo={mockBadge.logo}
        community={mockBadge.community}
        description={mockBadge.description}
        isDefault={mockBadge.isDefault}
        address={mockBadge.address}
        holderList={mockBadge.holderList}
        requiredQuests={mockBadge.requiredQuests}
        requiredEngageScore={mockBadge.requiredEngageScore}
        requiredPrice={mockBadge.requiredPrice}
      />
      <BadgeConditionSection
        requiredQuests={mockBadge.requiredQuests}
        requiredEngageScore={mockBadge.requiredEngageScore}
        requiredPrice={mockBadge.requiredPrice}
      />
      <BadgeClaimedSection
        address={mockBadge.address}
        claimedBadge={{
          // isClaimed: mockClamedBadge.isClaimed,
          address: mockClamedBadge.address,
          tokenId: mockClamedBadge.tokenId,
          tokenStandard: mockClamedBadge.tokenStandard,
          chain: mockClamedBadge.chain,
        }}
      />
    </VStack>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const daoID = parseInt(context.params?.id as string)

//   return {
//     props: {
//       id: daoID,
//     },
//   }
// }

export default BadgePage
