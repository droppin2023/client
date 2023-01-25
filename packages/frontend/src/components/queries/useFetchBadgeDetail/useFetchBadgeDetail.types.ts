// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Community, EngageScore, Price, Quest, Quests, User } from '@components/queries/common'

export interface FetchBadgeDetailParams {
  communityId: number
  badgeId: number
}

export interface FetchBadgeDetailResponse {
  id: number
  name: string
  symbol: string
  logo: string
  community: Community
  description: string
  isDefault: boolean
  address: string
  holderList: User[]
  requiredQuests: Quests[]
  requiredEngageScore: EngageScore
  requiredPrice: Price
}
