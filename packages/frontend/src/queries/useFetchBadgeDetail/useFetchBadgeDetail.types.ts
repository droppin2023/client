// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { SchemaProps } from '@components/badgePage/BadgeOverview/BadgeOverview.types'
import { Community, Quest } from '@queries/common'

export interface FetchBadgeDetailParams {
  badgeId: number
}

export interface FetchBadgeDetailResponse {
  id: number
  name: string
  image: string
  community: Community
  description: string
  address: string
  requiredQuests: Quest[]
  engagePointsThreshold: number
  badgePrice: number
  groupId: string
  symbol: string
  offerId: string
  schemaHash: string
  schemaType: string
  schemaId: string
}
