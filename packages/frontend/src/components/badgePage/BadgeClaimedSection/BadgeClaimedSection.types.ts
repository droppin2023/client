export interface BadgeClaimedSectionProps {
  address: string
  claimedBadge: {
    isClaimed: boolean
    address: string
    tokenId: number
    tokenStandard: string
    chain: string
  }
}
