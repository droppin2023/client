import type { EngageScore, Price, Quest, Quests } from '@components/queries/common'

export interface BadgeConditionSectionProps {
  requiredQuests: Quests[]
  requiredEngageScore: EngageScore
  requiredPrice: Price
}
