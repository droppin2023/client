export interface BadgeClaimedSectionProps {
  address: string
  claimedBadge?: {
    address: string
    tokenId: number
    tokenStandard: string
    chain: string
  }
}
