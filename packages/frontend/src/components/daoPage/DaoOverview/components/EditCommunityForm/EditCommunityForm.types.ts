import { Categories } from '@types/categories'
import { StaticImageData } from 'next/image'

export interface EditCommunityFormProps {
  isOpen: boolean
  onClose: () => void
  badges: {
    daoName: string
    img?: StaticImageData
    name: string
    recentActivity: string
    minter: string
    isLocked: false
  }[]
  members: { name: string; img: StaticImageData }[]
  name: string
  discord: string
  website: string
  img: string
  description: string
  chain: string
  category: Categories
}
