import type { Badge, Quest } from '@queries/common'

export interface DaoBadgesSectionProps {
  badges: Badge[]
  questsDiscord: Quest[]
  questsSubmitForm: Quest[]
  isLoading: boolean
}
