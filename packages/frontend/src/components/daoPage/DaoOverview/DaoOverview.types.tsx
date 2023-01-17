import type { Categories } from '@types/categories'
import { StaticImageData } from 'next/image'

// TODO: better type definition for memberList
export interface DaoOverviewProps {
  name: string
  imgUrl?: StaticImageData
  minter: string
  memberCount: number
  memberList: { name: string; img: StaticImageData }[]
  created: Date
  earnings: number
  chain: string
  category: Categories
  repScore: number
  repUnit: string
  website?: string
  discord?: string
  description: string
}
