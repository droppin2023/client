import type { QuestType } from '@components/queries/common'

export interface QuestCardProps {
  name: string
  reward: number
  isCompleted?: boolean
  questType: QuestType
}
