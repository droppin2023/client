// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { Discord } from '../useFetchCommunityDetail/useFetchCommunityDetail.types'

export interface EditGroupParams {
  communityId: number
  name?: string
  link?: string
  logo?: string
  description?: string
  category?: string
  discord?: Discord
}
