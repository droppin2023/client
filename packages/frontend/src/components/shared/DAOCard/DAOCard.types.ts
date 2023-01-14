import { StaticImageData } from 'next/image'

export interface DAOCardProps {
  imgUrl?: StaticImageData | string
  name: string
  memberCount: number
  repScore: number
  order: number
}
