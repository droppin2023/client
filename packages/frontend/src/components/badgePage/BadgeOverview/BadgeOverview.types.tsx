import { Community, EngageScore, Price, Quest, User } from '@components/queries/common'

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
  requiredQuests: Quest[]
  requiredEngageScore: EngageScore
  requiredPrice: Price
}
