import { Quest } from '@queries/common'

export interface BadgeConditionSectionProps {
  requiredQuests: Quest[]
  badgePrice: number
  badgeAddress: string
  isLoading: boolean
  communityName: string
  engagePointsThreshold: number
  symbol: string
}
