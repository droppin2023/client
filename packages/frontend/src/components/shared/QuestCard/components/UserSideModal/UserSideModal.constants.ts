import { Status } from '@queries/common'

export const HEADER_MAPPING = {
  [Status.pending]: 'Pending Quest',
  [Status.accepted]: 'Accepted Quest',
  [Status.rejected]: 'Rejected Quest',
  // [Status.claimed]: 'Claimed Quest',
  [Status.noStatus]: 'Quest',
}
