import { QuestCategories } from '@types/quest'

// TODO: better type definitions for quests
export interface BadgeFormProps {
  isOpen: boolean
  onClose: () => void
  repUnit: string
  quests: {
    name: string
    type: QuestCategories
    reward: number
  }[]
}
