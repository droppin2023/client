import { ModalProps } from '@types/modal'
import { StaticImageData } from 'next/image'
import { SchemaProps } from '../../BadgeOverview.types'

export type ClaimModalProps = ModalProps & {
  badgeId: number
  badgeName: string
  badgeLogo: string | StaticImageData
  badgePrice: number
  badgeAddress: string
  qrCode: any
  sessionID: string
  offerId: string
  engagementScore: number
  schema: SchemaProps
}

export enum ClaimModalPhase {
  PRE_IDENTIFY = 0,
  POST_IDENTIFY = 1,
  CLAIMED = 2,
}

export type qrProofRequestParams = {
  engagementScore: number
  schemaHash: string
  schemaId: string
  schemaName: string
}
