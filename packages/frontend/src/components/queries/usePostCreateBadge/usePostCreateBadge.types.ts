// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface CreateBadgeParams {
  contract: OnChainBadgeParams
  description: string
  name: string
}

export interface OnChainBadgeParams {
  requiredQuests: number[]
  engagePointsThreshold: number
  badgePrice: number
  name: string
  NFT: string
  groupId: number
  symbol: string
  URI: string
}
