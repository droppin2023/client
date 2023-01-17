import type { QuestCategories } from '@types/questCategories'

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
    type: QuestCategories
    reward: number
  }[]
}
