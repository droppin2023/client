// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Quest, User } from '@queries/common'

export interface FetchPendingQuestsParams {
  groupId: number
  username: string
}

export interface FetchPendingQuestsResponse {
  pendingQuests: PendingQuest[]
}

export interface PendingQuest {
  quest: Quest
  requestUser: User
  requestAnswer: string
}
