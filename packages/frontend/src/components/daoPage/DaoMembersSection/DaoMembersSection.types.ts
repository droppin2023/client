import type { StaticImageData } from 'next/image'
import type { ReactNode } from 'react'

export interface MemberTableRow {
  number: number
  name: string
  img: StaticImageData
  repScore: string
  quests: number
  karma: number
  badges: ReactNode
}
