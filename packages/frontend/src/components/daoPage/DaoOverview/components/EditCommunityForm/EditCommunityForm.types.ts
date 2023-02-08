import { Badge, Category, DiscordGuild, User } from '@queries/common'
import { memberInCommunity } from '@queries/useFetchCommunityDetail/useFetchCommunityDetail.types'
import { StaticImageData } from 'next/image'

export interface EditCommunityFormProps {
  isOpen: boolean
  onClose: () => void
  badges: Badge[]
  members: memberInCommunity[]
  name: string
  discord: DiscordGuild
  website: string
  img: string | StaticImageData
  description: string
  chain: string
  category: Category
  owner: User
}
