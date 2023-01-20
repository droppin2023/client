// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Badge, Community, EngageScore, Status, Quest } from '@components/queries/common'

export interface FetchUserDetailParams {
  userId: number
}

export interface FetchUserDetailResponse {
  id: number
  name: string
  description: string
  image: string
  badges: Badge[]
  communitiesWithBadge: CommunityWithBadge[]
  engageScoresAndCommunity: EngageScoreAndCommunity[]
  userQuests: UserQuest[]
}

export interface CommunityWithBadge {
  community: Community
  badges: Badge[]
}

export interface EngageScoreAndCommunity {
  engageScore: EngageScore
  community: Community
}

export interface UserQuest {
  status: Status
  quests: Quest[]
}
