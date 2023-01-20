// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { EngageScore } from '@components/queries/common'

export interface FetchQuestDetailParams {
  groupId: number
  questId: number
  userId: number
}

export interface FetchQuestDetailResponse {
  id: number
  schemaHash: string
  title: string
  engageScore: EngageScore
  condition: Condtion
  description: string
}

export interface Condtion {
  type: string
  detailType: number
}

export interface Community {
  id: number
  account: string
  image: string
  name: string
}
