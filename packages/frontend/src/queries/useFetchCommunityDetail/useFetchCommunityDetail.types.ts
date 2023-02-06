// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Badge, EngageScore, Quest, User } from '@queries/common'

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
  link?: string
  badges: Badge[]
  quests: Quest[]
  defaultBadge: Badge
  repUnit: string
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
