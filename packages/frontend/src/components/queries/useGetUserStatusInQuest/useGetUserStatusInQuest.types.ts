// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Community, Quest, Status } from '../common'

export interface GetUserStatusQuestParams {
  communityId: number
  questId: number
  username: string
}

export interface GetUserStatusQuestResponse {
  status: Status
  quest: Quest
  community: Community
  userSubmission?: string
  communityMessage?: string
}
