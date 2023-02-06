// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Quest, User } from '@queries/common'
import { memberInCommunity } from '../useFetchCommunityDetail/useFetchCommunityDetail.types'

export interface FetchPendingQuestsCommunityParams {
  groupId: number
  members: memberInCommunity[]
}

export interface FetchPendingQuestsCommunityResponse {
  pendingQuests: PendingQuest[]
}

export interface PendingQuest {
  quest: Quest
  requestUser: User
  requestAnswer: string
}
