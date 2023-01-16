import { StaticImageData } from 'next/image'

export interface QuestBadgeProps {
  daoName?: string
  img?: StaticImageData
  name: string
  recentActivity?: string
  minter?: string
  isLocked: boolean
  lockedMessage?: string
}
