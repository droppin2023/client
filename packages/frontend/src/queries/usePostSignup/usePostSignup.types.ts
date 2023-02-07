// THIS FILE CONTAINS ALL THE NEEDED TYPES, USUALLY PARAMS AND RESPONSE FORMAT

import { DiscordUser } from '@queries/common'

export interface SignupParams {
  address: string
  name: string
  username: string
  description: string
  discord?: DiscordUser
  image: string
  twitter?: string
}
