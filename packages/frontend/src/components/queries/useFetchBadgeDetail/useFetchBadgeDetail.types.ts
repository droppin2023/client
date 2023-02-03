// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Community, Quests, User } from '@components/queries/common'

export interface FetchBadgeDetailParams {
  badgeId: number
}

export interface FetchBadgeDetailResponse {
  id: number
  name: string
  symbol: string
  image: string
  community: Community
  description: string
  isDefault: boolean
  address: string
  holderList: User[]
  requiredQuests: Quests[]
  engagePointsThreshold: number
  badgePrice: number
  groupId: string
}
