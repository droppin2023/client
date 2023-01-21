import type { QuestType } from '@components/queries/common'

// TODO: better type definition for badges and quests
export interface DaoBadgesSectionProps {
  badges: {
    daoName: string
    name: string
    recentActivity: string
    minter: string
    isLocked: false
  }[]
  quests: {
    name: string
    type: QuestType
    reward: number
  }[]
}
