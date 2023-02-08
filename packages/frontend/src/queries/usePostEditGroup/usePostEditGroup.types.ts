// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { DiscordGuild } from '@queries/common'

export interface EditGroupParams {
  id: number
  name?: string
  link?: string
  logo?: string
  description?: string
  category?: string
  discord?: DiscordGuild
}
