import type { Quest, QuestType } from '@queries/common'

export interface QuestCardProps {
  quest: Quest
  questType: QuestType
  showNoDetail?: boolean
}
