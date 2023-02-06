export interface User {
  username: string
  address: string
  image: string
  name: string
}

export interface Price {
  number: number
  unit: string
}

export enum QuestType {
  discord = 'discord',
  form = 'form',
}

export interface Condition {
  type: QuestType
  conditionDetail?: DiscordRoleCondition
}

export interface DiscordRoleCondition {
  guildId: number
  roleId: number
}

export interface Quest {
  id: number
  name: string
  engagePoints: number
  detail: string
  groupId: number
  condition: Condition
  symbol: string
}

// COMMUNITY
export interface Community {
  id: number
  address: string
  image: string
  name: string
}

export interface CommunityExploreComponent {
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
  link?: string
}

export interface Badge {
  id: number
  image: string
  name: string
  description: string
  groupId: number
  address: string
  badgePrice: number
  requiredQuests: Quest[]
}

//ENGAGESCORE

export interface EngageScore {
  number: number
  unit: string
}

export enum Category {
  Education = 'Education',
  NFT = 'NFT',
  Gaming = 'Gaming',
  Infrastructure = 'Infrastructure',
  Defi = 'DeFi',
  Music = 'Music',
  Other = 'Other',
}

export enum Status {
  noStatus = 'NO_STATUS',
  pending = 'PENDING',
  accepted = 'ACCEPTED',
  rejected = 'REJECTED',
}

// DISCORD

export interface DiscordUser {
  id: string
  name: string
  discriminator: string
}
