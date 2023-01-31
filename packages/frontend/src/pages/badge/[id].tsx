import { VStack } from '@chakra-ui/react'

import type { GetServerSideProps } from 'next'
import 'twin.macro'

import BadgeClaimedSection from '@components/badgePage/BadgeClaimedSection'
import BadgeConditionSection from '@components/badgePage/BadgeConditionSection'
import BadgeOverview from '@components/badgePage/BadgeOverview'
import useFetchBadgeDetail from '@components/queries/useFetchBadgeDetail'
import useFetchClaimedBadge from '@components/queries/useFetchClaimedBadge'
import { useUserContext } from '@context/UserContext'

const BadgePage = ({ id }: { id: number }) => {
  // TODO: integrate real data
  // const badgeData = MOCK_BADGE
  // const claimedBadgeData = MOCK_CLAIMED_BADGE

  const { user } = useUserContext()

  const {
    data: badgeData,
    isLoading: isFetchBadgeDetailsLoading,
    error: isFetchBadgeDetailsError,
  } = useFetchBadgeDetail({ badgeId: id })

  const {
    data: claimedBadgeData,
    isLoading: isFetchClaimedBadgeLoading,
    error: isFetchClaimedBadgeError,
  } = useFetchClaimedBadge({ badgeId: id, username: user?.username as string })

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
        isLoading={isFetchBadgeDetailsLoading}
      />
      <BadgeConditionSection
        requiredQuests={badgeData.requiredQuests}
        requiredEngageScore={badgeData.requiredEngageScore}
        requiredPrice={badgeData.requiredPrice}
        isLoading={isFetchBadgeDetailsLoading}
      />

      {/* TODO: would need a bit of explanation on this part */}
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
      )}
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
