import { ModalProps } from '@/types/modal'
import type { Quest, QuestType } from '@queries/common'

export type QuestDetailModalProps = ModalProps & {
  questType: QuestType
  quest: Quest
}
