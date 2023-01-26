import type { Quest, QuestType } from '@components/queries/common'

export interface QuestCardProps {
  quest: Quest
  questType: QuestType
  showNoDetail?: boolean
}
