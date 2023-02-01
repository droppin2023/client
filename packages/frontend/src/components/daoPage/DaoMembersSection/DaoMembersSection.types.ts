import { User } from '@components/queries/common'
import { memberInCommunity } from '@components/queries/useFetchCommunityDetail/useFetchCommunityDetail.types'
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
  members: memberInCommunity[]
  owner: User
}
