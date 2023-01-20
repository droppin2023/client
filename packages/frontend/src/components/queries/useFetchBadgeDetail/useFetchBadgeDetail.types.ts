// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

export interface FetchBadgeDetailParams {
  badgeId: number
}

export interface FetchBadgeDetailResponse {
  id: number
  description: string
  name: string
  badgePrice: number
  priceUnit: string
  engagePointThreshold: number
  requiredQuests: Quests[]
  address: string
  nftInitBaseURI: string
  nftSymbol: string
  //group
  groupId: number
  groupName: string
  engageUnit: string
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
