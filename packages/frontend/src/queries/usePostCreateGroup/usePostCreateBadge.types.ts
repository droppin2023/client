// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { DiscordGuild } from '@queries/common'

export interface CreateGroupParams {
  name: string
  link: string
  logo: string
  description: string
  category: string
  discord?: DiscordGuild
  repUnit: string
  issuerId: string
  token: string
  email: string
  password: string
}
