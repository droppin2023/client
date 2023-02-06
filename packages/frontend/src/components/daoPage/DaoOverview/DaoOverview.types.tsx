import { Badge, Category, User } from '@queries/common'

export interface DaoOverviewProps {
  name: string
  imgUrl?: string
  memberCount: number
  memberList: User[]
  category: Category
  repScore: number
  chain: string
  website?: string
  discordLink?: string
  description: string
  badges: Badge[]
  owner: User
  isLoading: boolean
}
