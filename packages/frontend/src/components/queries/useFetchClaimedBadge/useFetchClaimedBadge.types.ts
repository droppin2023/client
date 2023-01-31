// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface FetchClaimedBadgeParams {
  badgeId: number
  badgeAddress: string
  userAddress: string
}

export interface FetchClaimedBadgeResponse {
  address: string
  tokenId: number
  tokenStandard: string
  chain: string
}
