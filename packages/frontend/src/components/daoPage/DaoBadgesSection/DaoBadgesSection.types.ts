import type { Badge, Quest } from '@components/queries/common'

// TODO: better type definition for badges and quests
export interface DaoBadgesSectionProps {
  badges: Badge[]
  questsDiscord: Quest[]
  questsSubmitForm: Quest[]
  isLoading: boolean
}
