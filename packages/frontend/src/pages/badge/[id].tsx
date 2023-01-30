import { VStack } from '@chakra-ui/react'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

import BadgeClaimedSection from '@components/badgePage/BadgeClaimedSection'
import BadgeConditionSection from '@components/badgePage/BadgeConditionSection'
import BadgeOverview from '@components/badgePage/BadgeOverview'
import useFetchBadgeDetail from '@components/queries/useFetchBadgeDetail'
import { MOCK_CLAIMED_BADGE } from '@mockData'

const BadgePage = ({ id }: { id: number }) => {
  // TODO: integrate real data
  // const mockBadge = MOCK_BADGE
  const mockClamedBadge = MOCK_CLAIMED_BADGE

  const { data: mockBadge, isLoading, error } = useFetchBadgeDetail({ badgeId: id })

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
        isLoading={isLoading}
      />
      <BadgeConditionSection
        requiredQuests={mockBadge.requiredQuests}
        requiredEngageScore={mockBadge.requiredEngageScore}
        requiredPrice={mockBadge.requiredPrice}
        isLoading={isLoading}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const badgeID = parseInt(context.params?.id as string)

  return {
    props: {
      id: badgeID,
    },
  }
}

export default BadgePage
