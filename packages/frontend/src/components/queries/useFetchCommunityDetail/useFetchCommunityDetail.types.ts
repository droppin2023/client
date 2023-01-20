// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { EngageScore, Link, Quests, User } from '@components/queries/commonType'

export interface FetchCommunityDetailParams {
  communityId: number
}

export interface FetchCommunityDetailResponse {
  id: number
  logo: string
  name: string
  category: string
  discord?: Discord
  description: string
  owner: User
  totalEngage: EngageScore
  members: User[]
  totalMember: number
  blockchain: string
  links?: Link[]
  badges: Badge[]
  quests: Quests[]
}

export interface Discord {
  link: string
  guildId: number
}

export interface Badge {
  id: number
  logo: string
  name: string
  description: string
}

export enum Category {
  Education = 'Education',
  NFT = 'NFT',
  Gaming = 'Gaming',
  Infrastructure = 'Infrastructure',
  Defi = 'DeFi',
  Music = 'Music',
}
