import { StaticImageData } from 'next/image'

export interface MemberCardProps {
  rank?: number
  avatar?: StaticImageData
  name: string
}
