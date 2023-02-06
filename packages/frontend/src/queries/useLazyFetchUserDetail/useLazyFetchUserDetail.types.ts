// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Badge, Community, DiscordUser, EngageScore, Quest, Status } from '@queries/common'

export interface FetchUserDetailParams {
  username: string
}

export interface CommunityWithBadge {
  community: Community
  badges: Badge[]
}

export interface EngageScoreAndCommunity {
  engageScore: EngageScore
  community: Community
}

export interface UserQuest extends Quest {
  status: Status
  userSubmission: string
}

export interface FetchUserDetailResponse {
  username: string
  name: string
  description: string
  image: string
  badges: Badge[]
  communitiesWithBadge: CommunityWithBadge[]
  engageScoresAndCommunity: EngageScoreAndCommunity[]
  userQuests: UserQuest[]
  discord: DiscordUser
}
