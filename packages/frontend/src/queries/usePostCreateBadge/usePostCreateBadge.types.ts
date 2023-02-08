// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { ethers } from 'ethers'

export interface CreateBadgeParams {
  contract: OnChainBadgeParams
  description: string
  name: string
}

export interface OnChainBadgeParams {
  schemaHash: any
  requiredQuests: number[]
  engagePointsThreshold: number
  badgePrice: ethers.BigNumber
  name: string
  NFT: string
  groupId: number
  symbol: string
  URI: string
}
