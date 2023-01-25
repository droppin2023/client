// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Condition, EngageScore, Quest, Status } from '@components/queries/common'

export interface FetchQuestDetailParams {
  groupId: number
  questId: number
}

export interface FetchQuestDetailResponse {
  quest: Quest

  // schemaHash: string
  condition: Condition
  // status: Status
  // answer?: string
}
