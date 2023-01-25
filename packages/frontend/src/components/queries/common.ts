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
  logo: string
  name: string
  description: string
  isClaimed: boolean
  groupId: number
  groupName: string
}

// QUEST
export interface Quests {
  questType: QuestType
  questList: Quest[]
}

export interface Quest {
  id: number
  name: string
  engageScore: EngageScore
  // schemaHash: string
  // condition: Condition
  description: string
  // status: Status
}

export enum QuestType {
  discord = 0,
  form = 1,
}

// Quest Contdition
export interface Condition {
  type: QuestType
  conditionDetail?: DiscordRoleCondition
}

export interface DiscordRoleCondition {
  guildId: number
  roleId: number
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
  pending = 'Pending',
  accepted = 'Accepted',
  rejected = 'Rejected',
}
