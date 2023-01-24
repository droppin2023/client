import type { EngageScore, Price, Quest } from '@components/queries/common'

export interface BadgeConditionSectionProps {
  requiredQuests: Quest[]
  requiredEngageScore: EngageScore
  requiredPrice: Price
}
