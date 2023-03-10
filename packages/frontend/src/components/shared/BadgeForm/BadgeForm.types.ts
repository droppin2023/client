import { Quest } from '@queries/common'

// TODO: better type definitions for quests
export interface BadgeFormProps {
  isOpen: boolean
  onClose: () => void
  repUnit: string
  questsDiscord: Quest[]
  questsSubmitForm: Quest[]
  groupId: number
  issuerId: string
  token: string
  email: string
  password: string
}
