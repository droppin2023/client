import type { Categories } from '@types/categories'
import { StaticImageData } from 'next/image'

// TODO: better type definition for memberList
export interface DaoOverviewProps {
  name: string
  imgUrl?: string
  minter: string
  memberCount: number
  memberList: { name: string; img: StaticImageData }[]
  created: Date
  chain: string
  category: Categories
  repScore: number
  website?: string
  discord?: string
  description: string
  badges: {
    daoName: string
    name: string
    recentActivity: string
    minter: string
    isLocked: false
  }[]
}
