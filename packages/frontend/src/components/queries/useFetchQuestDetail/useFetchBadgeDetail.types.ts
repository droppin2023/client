// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { EngageScore, Status } from '@components/queries/common'

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
  condition: Condition
  description: string
  status: Status
  message?: string
  answer?: string
}

export interface Condition {
  type: string
  detailType: number
}
