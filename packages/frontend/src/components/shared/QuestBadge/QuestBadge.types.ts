import { StaticImageData } from 'next/image'

export interface QuestBadgeProps {
  daoName?: string
  img?: StaticImageData | string
  name: string
  recentActivity?: string
  minter?: string
  isLocked: boolean
  lockedMessage?: string
}
