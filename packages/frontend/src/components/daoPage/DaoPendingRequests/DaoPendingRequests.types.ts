import { QuestStatus } from '@types/quest'
import type { StaticImageData } from 'next/image'

// TODO: change all any type with proper definitions
export interface DaoPendingRequestsProps {
  requests: any
}

export interface PendingRequestsTableRow {
  name: string
  img: StaticImageData
  questName: string
  questReward: string
  questStatus: QuestStatus
}
