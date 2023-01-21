import type { QuestType } from '@components/queries/common'
import { ModalProps } from '@types/modal'

export type QuestDetailModalProps = ModalProps & {
  questType: QuestType
  questTitle: string
}
