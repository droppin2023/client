import { Price, User } from '@components/queries/common'
import { ModalProps } from '@types/modal'
import { StaticImageData } from 'next/image'

export type ClaimModalProps = ModalProps & {
  badgeName: string
  badgeLogo: string | StaticImageData
  badgePrice: Price
  user?: User
}
