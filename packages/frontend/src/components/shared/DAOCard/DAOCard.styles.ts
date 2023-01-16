import { css } from 'twin.macro'

import { foreground } from '@constants/colors'

export const imgSlot = (showBorder: boolean) => css`
  border-radius: 8px;
  ${showBorder ? `border: 2px dotted ${foreground};` : ''}

  position: relative;

  > img {
    border-radius: 8px;
  }
`

export const img = css`
  opacity: 0.8;
`

export const avatarPreview = css`
  margin-left: -10px;
`
