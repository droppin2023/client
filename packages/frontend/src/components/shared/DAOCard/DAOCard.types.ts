import { StaticImageData } from 'next/image'

interface MemberListItem {
  name: string
  img: StaticImageData
}

export interface DaoCardProps {
  imgUrl?: StaticImageData | string
  name: string
  memberCount: number
  memberList: MemberListItem[]
  repScore: number
  repUnit?: string
  order?: number
  showBorder?: boolean
  description?: string
}
