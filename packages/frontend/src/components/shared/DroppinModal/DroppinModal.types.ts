import { ModalProps } from '@/types/modal'

export type DroppinModalProps = ModalProps & {
  modatMessage: string
  modalStatus: ModalStatus
}

export enum ModalStatus {
  'loading' = 0,
  'success' = 1,
  'failed' = 2,
}
