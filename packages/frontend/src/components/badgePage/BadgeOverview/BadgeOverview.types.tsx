import { Community, EngageScore, Price, Quests, User } from '@components/queries/common'

export interface BadgeOverviewProps {
  id: number
  name: string
  symbol: string
  logo: string
  community: Community
  description: string
  isDefault: boolean
  address: string
  holderList: User[]
  requiredQuests: Quests[]
  requiredEngageScore: EngageScore
  requiredPrice: Price
  isLoading: boolean
}
