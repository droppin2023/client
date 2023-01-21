import { Badge, Category, User } from '@components/queries/common'

// TODO: better type definition for memberList
export interface DaoOverviewProps {
  name: string
  imgUrl?: string
  memberCount: number
  memberList: User[]
  category: Category
  repScore: number
  chain: string
  website?: string
  discord?: string
  description: string
  badges: Badge[]
  owner: User
}
