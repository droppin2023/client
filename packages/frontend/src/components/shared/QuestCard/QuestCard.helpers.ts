import { danger, orange, primary, violet } from '@constants/colors'
import { Status } from '@queries/common'

export const colorMap = (status: Status) => {
  switch (status) {
    case Status.noStatus:
      return orange
    case Status.accepted:
      return primary
    case Status.rejected:
      return danger
    case Status.pending:
      return violet
  }
}
