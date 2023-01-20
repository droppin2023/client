// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

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
  totalEngage: number
  engageUnit: string
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

export interface User {
  id: number
  account: string
  image: string
}

export interface Link {
  id: number
  name: string
  link: string
}

export interface Badge {
  id: number
  logo: string
  name: string
  description: string
}

export interface Quests {
  questType: number
  questList: Quest[]
}

export interface Quest {
  id: number
  name: string
  engageScore: number
}
export enum questType {
  discord = 'Discord',
  form = 'Submit Form',
}

export enum Category {
  Education = 'Education',
  NFT = 'NFT',
  Gaming = 'Gaming',
  Infrastructure = 'Infrastructure',
  Defi = 'DeFi',
  Music = 'Music',
}
