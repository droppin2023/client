import type { QuestType, Status } from '@components/queries/common'

export interface QuestCardProps {
  name: string
  reward: number
  id: number
  questType: QuestType
  repUnit: string
  status?: Status
}
