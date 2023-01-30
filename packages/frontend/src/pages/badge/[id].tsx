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
  // const badgeData = MOCK_BADGE
  const mockClamedBadge = MOCK_CLAIMED_BADGE

  const { data: badgeData, isLoading, error } = useFetchBadgeDetail({ badgeId: id })

  return (
    <VStack spacing="40px" marginBottom="100px">
      {/* TODO: integrate discord */}
      <BadgeOverview
        id={badgeData.id}
        name={badgeData.name}
        symbol={badgeData.symbol}
        logo={badgeData.logo}
        community={badgeData.community}
        description={badgeData.description}
        isDefault={badgeData.isDefault}
        address={badgeData.address}
        holderList={badgeData.holderList}
        requiredQuests={badgeData.requiredQuests}
        requiredEngageScore={badgeData.requiredEngageScore}
        requiredPrice={badgeData.requiredPrice}
        isLoading={isLoading}
      />
      <BadgeConditionSection
        requiredQuests={badgeData.requiredQuests}
        requiredEngageScore={badgeData.requiredEngageScore}
        requiredPrice={badgeData.requiredPrice}
        isLoading={isLoading}
      />
      <BadgeClaimedSection
        address={badgeData.address}
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
