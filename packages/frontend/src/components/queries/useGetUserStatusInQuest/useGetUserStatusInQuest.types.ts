// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Community, Status } from '../common'

export interface GetUserStatusQuestParams {
  communityId: number
  questId: number
  username: string
}

export interface GetUserStatusQuestResponse {
  status: Status
  community: Community
  userSubmission: string
  communityMessage: string
}
