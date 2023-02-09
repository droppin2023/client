export interface SchemaProps {
  schemaId: string
  schemaType: string
  schemaHash: string
}
export interface BadgeOverviewProps {
  id: number
  name: string
  symbol: string
  logo: string
  communityName: string
  description: string
  badgeAddress: string
  badgePrice: number
  isLoading: boolean
  offerId: string
  engagementScore: number
  schema?: SchemaProps
}
