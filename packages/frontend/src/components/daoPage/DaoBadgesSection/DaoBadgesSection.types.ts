import type { Badge, Quests } from '@components/queries/common'

// TODO: better type definition for badges and quests
export interface DaoBadgesSectionProps {
  badges: Badge[]
  questsDiscord: Quests
  questsSubmitForm: Quests
}
