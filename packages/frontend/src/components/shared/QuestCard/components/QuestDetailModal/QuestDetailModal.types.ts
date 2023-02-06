import type { Quest, QuestType } from '@queries/common'
import { ModalProps } from '@types/modal'

export type QuestDetailModalProps = ModalProps & {
  questType: QuestType
  quest: Quest
}
