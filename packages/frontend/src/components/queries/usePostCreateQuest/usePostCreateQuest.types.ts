// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Condition } from '../common'

export interface CreateQuestParams {
  contract: onChainQuest
  // schemaHash: string
  condition: Condition
  detail: string
  name: string
}
export interface onChainQuest {
  name: string
  groupId: number
  engagePoints: number
}
