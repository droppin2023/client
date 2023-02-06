// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Condition, Quest } from '@queries/common'

export interface FetchQuestDetailParams {
  questId: number
}

export interface FetchQuestDetailResponse {
  quest: Quest

  // schemaHash: string
  condition: Condition
  // status: Status
  // answer?: string
}
