import { ModalProps } from '@types/modal'
import { StaticImageData } from 'next/image'

export type ClaimModalProps = ModalProps & {
  badgeId: number
  badgeName: string
  badgeLogo: string | StaticImageData
  badgePrice: number
  badgeAddress: string
  qrCode: any
  sessionID: string
}

export enum ClaimModalPhase {
  PRE_IDENTIFY = 0,
  POST_IDENTIFY = 1,
  CLAIMED = 2,
}
