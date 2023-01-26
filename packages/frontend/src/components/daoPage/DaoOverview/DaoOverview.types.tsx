import { Badge, Category, User } from '@components/queries/common'
import { memberInCommunity } from '@components/queries/useFetchCommunityDetail/useFetchCommunityDetail.types'

// TODO: better type definition for memberList
export interface DaoOverviewProps {
  name: string
  imgUrl?: string
  memberCount: number
  memberList: memberInCommunity[]
  category: Category
  repScore: number
  chain: string
  website?: string
  discordLink?: string
  discordGuildId?: number
  description: string
  badges: Badge[]
  owner: User
}
