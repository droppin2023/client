import { User } from '@queries/common'
import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export interface MemberTableRow {
  number: number
  name: string
  img: StaticImageData | string
  repScore: string
  quests: number
  badges: ReactNode
  isOwner: boolean
}

export interface DaoMemberSectionProps {
  members: any[]
  owner: User
}
