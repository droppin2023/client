// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Condition, EngageScore, Status } from '@components/queries/common'

export interface FetchClaimedBadgeParams {
  badgeId: number
  username: string
}

export interface FetchClaimedBadgeResponse {
  isClaimed: boolean
  address: string
  tokenId: number
  tokenStandard: string
  chain: string
}
