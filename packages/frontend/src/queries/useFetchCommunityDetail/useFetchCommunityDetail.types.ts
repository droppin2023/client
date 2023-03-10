// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Badge, DiscordGuild, EngageScore, Quest, User } from '@queries/common'

export interface FetchCommunityDetailParams {
  communityId: number
}

export interface FetchCommunityDetailResponse {
  id: number
  logo: string
  name: string
  category: Category
  discord?: DiscordGuild
  description: string
  owner: User
  totalEngage: EngageScore
  members: User[]
  link?: string
  badges: Badge[]
  quests: Quest[]
  defaultBadge: Badge
  repUnit: string
  issuerId: string
  token: string
  email: string
  password: string
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
