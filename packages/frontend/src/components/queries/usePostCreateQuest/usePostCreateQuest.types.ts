// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Condtion } from '../common'

export interface CreateQuestParams {
  contract: onChainQuest
  schemaHash: string
  condition: Condtion
  detail: string
}
export interface onChainQuest {
  name: string
  groupId: number
  engagePoints: number
}
