import { Quest, User } from '@queries/common'

export interface FetchPendingQuestsCommunityParams {
  groupId: number
  members: any[]
}

export interface FetchPendingQuestsCommunityResponse {
  pendingQuests: PendingQuest[]
}

export interface PendingQuest {
  quest: Quest
  requestUser: User
  requestAnswer: string
}
