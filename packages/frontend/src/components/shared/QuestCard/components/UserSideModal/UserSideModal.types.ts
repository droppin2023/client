import { Community, Quest, QuestType, Status } from '@queries/common'
import { ModalProps } from '@types/modal'

export type UserSideModalProps = ModalProps & {
  questType: QuestType
  quest: Quest
  questStatus: Status
  userSubmission: string
  communityMessage: string
  community: Community
}
