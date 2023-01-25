import { Badge, Category, User } from '@components/queries/common'
import { memberInCommunity } from '@components/queries/useFetchCommunityDetail/useFetchCommunityDetail.types'

export interface EditCommunityFormProps {
  isOpen: boolean
  onClose: () => void
  badges: Badge[]
  members: memberInCommunity[]
  name: string
  discord: string
  website: string
  img: string
  description: string
  chain: string
  category: Category
  owner: User
}
