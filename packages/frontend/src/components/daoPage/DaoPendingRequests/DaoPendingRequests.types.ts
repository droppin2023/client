import type { StaticImageData } from 'next/image'

export interface DaoPendingRequestsProps {
  requests: any
}

export interface PendingRequestsTableRow {
  name: string
  img: StaticImageData
  questName: string
  // TODO: engageScore why type error?
  engageScore: any
  item: any
}
export interface EngageScore {
  number: number
  unit: string
}
