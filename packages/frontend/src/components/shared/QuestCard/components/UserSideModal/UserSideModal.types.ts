import { ModalProps } from '@/types/modal'
import { Community, Quest, QuestType, Status } from '@queries/common'

export type UserSideModalProps = ModalProps & {
  questType: QuestType
  quest: Quest
  questStatus: Status
  userSubmission: string
  communityMessage: string
  community: Community
}
