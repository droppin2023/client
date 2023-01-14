import { css } from 'twin.macro'

import { foreground } from '@constants/colors'

export const imgSlot = css`
  padding: 8px;
  border-radius: 8px;
  border: 2px dotted ${foreground};

  position: relative;

  > img {
    border-radius: 8px;
  }
`
