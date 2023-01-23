import { Quests } from '@components/queries/common'

// TODO: better type definitions for quests
export interface BadgeFormProps {
  isOpen: boolean
  onClose: () => void
  repUnit: string
  questsDiscord: Quests
  questsSubmitForm: Quests
  groupId: number
}
