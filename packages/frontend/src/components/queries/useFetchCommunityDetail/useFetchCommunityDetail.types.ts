// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Badge, EngageScore, Quests, User } from '@components/queries/common'

export interface FetchCommunityDetailParams {
  communityId: number
}

export interface FetchCommunityDetailResponse {
  id: number
  logo: string
  name: string
  category: Category
  discord?: string
  description: string
  owner: User
  totalEngage: EngageScore
  members: User[]
  totalMember: number
  blockchain: string
  link?: string
  badges: Badge[]
  quests: Quests[]
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
