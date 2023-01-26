// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Badge, EngageScore, Quest, Quests, User } from '@components/queries/common'

export interface FetchCommunityDetailParams {
  communityId: number
}

export interface FetchCommunityDetailResponse {
  id: number
  logo: string
  name: string
  category: Category
  discord?: Discord
  description: string
  owner: User
  totalEngage: EngageScore
  members: memberInCommunity[]
  totalMember: number
  blockchain: string
  link?: string
  badges: Badge[]
  quests: Quests[]
}

export interface memberInCommunity {
  id: number
  address: string
  image: string
  name: string
  engageScore: EngageScore
  quests: Quest[]
  badges: Badge[]
}

export interface Discord {
  link: string
  guildId: number
}

export enum Category {
  Other = 'Other',
  Education = 'Education',
  NFT = 'NFT',
  Gaming = 'Gaming',
  Infrastructure = 'Infrastructure',
  Defi = 'DeFi',
  Music = 'Music',
}
