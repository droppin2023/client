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
  questType: number
  questList: Quest[]
}

export interface Quest {
  id: number
  name: string
  engageScore: number
}

export interface Condtion {
  type: string
  detailType: number
}

export enum questType {
  discord = 'Discord',
  form = 'Submit Form',
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
