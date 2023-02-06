// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Category, CommunityExploreComponent } from '@queries/common'

export interface FetchCommunityListParams {
  query?: string
  userId?: number
  category?: Category
  order?: Order
}

export interface FetchCommunityListResponse {
  communityList: CommunityExploreComponent[]
}

export enum Order {
  badgeAmount = 'Badge Amount',
  memberCount = 'Member Count',
  new = 'Sort by Newist',
  engageScore = 'Engage Score',
}
