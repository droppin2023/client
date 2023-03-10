import { Badge, Category, DiscordGuild, User } from '@queries/common'
import { StaticImageData } from 'next/image'

export interface DaoOverviewProps {
  name: string
  imgUrl?: string | StaticImageData
  memberCount: number
  memberList: User[]
  category: Category
  repScore: number
  chain: string
  website?: string
  discordLink?: string
  guildInstance?: DiscordGuild
  description: string
  badges: Badge[]
  owner: User
  isLoading: boolean
  defaultBadge: Badge
}
