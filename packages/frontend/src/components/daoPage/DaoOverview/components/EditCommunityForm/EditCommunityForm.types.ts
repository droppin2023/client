import { Badge, Category, User } from '@components/queries/common'

export interface EditCommunityFormProps {
  isOpen: boolean
  onClose: () => void
  badges: Badge[]
  members: User[]
  name: string
  discord: string
  website: string
  img: string
  description: string
  chain: string
  category: Category
  owner: User
}
