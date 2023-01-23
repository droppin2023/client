import { Status } from '@components/queries/common'
import { danger, lightBlue, orange, primary, violet } from '@constants/colors'

export const COLOR_MAPPING = {
  [Status.noStatus]: orange,
  [Status.accepted]: lightBlue,
  [Status.claimed]: primary,
  [Status.pending]: violet,
  [Status.rejected]: danger,
}
