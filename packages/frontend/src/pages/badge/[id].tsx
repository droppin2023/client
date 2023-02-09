import { VStack } from '@chakra-ui/react'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

import BadgeConditionSection from '@components/badgePage/BadgeConditionSection'
import BadgeOverview from '@components/badgePage/BadgeOverview'
import { useUserContext } from '@context/UserContext'
import useFetchBadgeDetail from '@queries/useFetchBadgeDetail'
import useFetchCommunityDetail from '@queries/useFetchCommunityDetail'

const BadgePage = ({ id }: { id: number }) => {
  const { user } = useUserContext()

  const {
    data: badgeData,
    isLoading: isFetchBadgeDetailsLoading,
    error: isFetchBadgeDetailsError,
  } = useFetchBadgeDetail({ badgeId: id })

  const {
    data: communityData,
    isLoading: fetchCommunityLoading,
    error: fetchCommunityError,
  } = useFetchCommunityDetail({ communityId: Number(badgeData.groupId) })

  const loading = isFetchBadgeDetailsLoading || fetchCommunityLoading

  return (
    <VStack spacing="40px" marginBottom="100px">
      {/* TODO: integrate discord */}
      <BadgeOverview
        id={badgeData.id}
        name={badgeData.name}
        symbol={badgeData.symbol}
        logo={badgeData.image}
        communityName={communityData.name}
        description={badgeData.description}
        badgeAddress={badgeData.address}
        badgePrice={badgeData.badgePrice}
        isLoading={loading}
        offerId={badgeData.offerId}
        engagementScore={badgeData.engagePointsThreshold}
        schema={badgeData.schema}
      />
      <BadgeConditionSection
        requiredQuests={badgeData.requiredQuests}
        engagePointsThreshold={badgeData.engagePointsThreshold}
        symbol={badgeData.symbol}
        badgePrice={badgeData.badgePrice}
        badgeAddress={badgeData.address}
        isLoading={loading}
        communityName={communityData.name}
      />

      {/* TODO: would need a bit of explanation on this part
      {claimedBadgeData.address.length > 0 && (
        <BadgeClaimedSection
          address={badgeData.address}
          claimedBadge={{
            // isClaimed: claimedBadgeData.isClaimed,
            address: claimedBadgeData.address,
            tokenId: claimedBadgeData.tokenId,
            tokenStandard: claimedBadgeData.tokenStandard,
            chain: claimedBadgeData.chain,
          }}
          isLoading={isFetchClaimedBadgeLoading}
        />
      )} */}
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
