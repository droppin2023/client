import type { StaticImageData } from 'next/image'

export interface BadgeSelectRadioGroupProps {
  badges: {
    daoName: string
    img?: StaticImageData
    name: string
    recentActivity: string
    minter: string
    isLocked: false
  }[]
  onChange: (nextValue: string) => void
  defaultValue: string
  value: string
}
