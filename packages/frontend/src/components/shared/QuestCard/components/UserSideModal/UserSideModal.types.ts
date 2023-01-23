import { Status } from '@components/queries/common'
import { ModalProps } from '@types/modal'

export type UserSideModalProps = ModalProps & {
  questStatus: Status
}
