import { Badge, Category, DiscordGuild, User } from '@queries/common'
import { StaticImageData } from 'next/image'

export interface EditCommunityFormProps {
  isOpen: boolean
  onClose: () => void
  badges: Badge[]
  members: any[]
  name: string
  discord: DiscordGuild
  website: string
  img: string | StaticImageData
  description: string
  chain: string
  category: Category
  owner: User
}
