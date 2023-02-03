import { EngageScore, Quests, User } from '@components/queries/common'

export interface BadgeOverviewProps {
  id: number
  name: string
  symbol: string
  logo: string
  communityName: string
  description: string
  isDefault: boolean
  badgeAddress: string
  holderList: User[]
  requiredQuests: Quests[]
  requiredEngageScore: EngageScore
  badgePrice: number
  isLoading: boolean
}
