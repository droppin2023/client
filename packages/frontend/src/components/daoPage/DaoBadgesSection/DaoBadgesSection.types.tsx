// TODO: better type definition for badges
export interface DaoBadgesSectionProps {
  badges: {
    daoName: string
    name: string
    recentActivity: string
    minter: string
    isLocked: false
  }[]
}
