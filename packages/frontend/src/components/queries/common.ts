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
}

export enum Status {
  noStatus = 'No Status',
  pending = 'Pending',
  accepted = 'Accepted',
  rejected = 'Rejected',
  claimed = 'Claimed',
}
