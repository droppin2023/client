import { Price } from '@components/queries/common'
import { ModalProps } from '@types/modal'
import { StaticImageData } from 'next/image'

export type ClaimModalProps = ModalProps & {
  badgeName: string
  badgeLogo: string | StaticImageData
  badgePrice: Price
}

export enum ClaimModalPhase {
  PRE_IDENTIFY = 0,
  POST_IDENTIFY = 1,
  CLAIMED = 2,
}
