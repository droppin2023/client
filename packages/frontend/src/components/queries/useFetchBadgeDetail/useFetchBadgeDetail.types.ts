// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { EngageScore, Price, Quests, User } from '@components/queries/commonType'

export interface FetchBadgeDetailParams {
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

export interface Community {
  id: number
  account: string
  image: string
  name: string
}
