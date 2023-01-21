export interface User {
  id: number
  address: string
  image: string
  name: string
}

export interface Price {
  number: number
  unit: string
}

export interface Link {
  id: number
  name: string
  link: string
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
  discord?: Discord
  description: string
  owner: User
  totalEngage: EngageScore
  members: User[]
  totalMember: number
  links?: Link[]
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
  isClaimed: boolean
  groupId: number
  groupName: string
}

// QUEST
export interface Quests {
  questType: number
  questList: Quest[]
}

export interface Quest {
  id: number
  name: string
  engageScore: EngageScore
}

export enum QuestType {
  discord = 0,
  form = 1,
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
  noStatus = 'No Status',
  pending = 'Pending',
  accepted = 'Accepted',
  rejected = 'Rejected',
  claimed = 'Claimed',
}
