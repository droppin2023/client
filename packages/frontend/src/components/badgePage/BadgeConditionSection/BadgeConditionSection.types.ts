import type { EngageScore, Price, Quests } from '@components/queries/common'

export interface BadgeConditionSectionProps {
  requiredQuests: Quests[]
  requiredEngageScore: EngageScore
  requiredPrice: Price
  badgeAddress: string
  isLoading: boolean
}
