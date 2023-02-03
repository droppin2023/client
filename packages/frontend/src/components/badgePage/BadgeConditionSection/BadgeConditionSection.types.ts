import type { EngageScore } from '@components/queries/common'

export interface BadgeConditionSectionProps {
  requiredQuests: any
  requiredEngageScore: EngageScore
  badgePrice: number
  badgeAddress: string
  isLoading: boolean
  communityName: string
  engagePointsThreshold: number
}
