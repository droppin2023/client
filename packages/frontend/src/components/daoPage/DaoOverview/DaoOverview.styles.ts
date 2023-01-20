import { css } from 'twin.macro'

import { foreground } from '@constants/colors'

export const bannerOrnament = css`
  position: realtive;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
`

export const daoImage = css`
  border: 4px solid ${foreground};
  border-radius: 16px;
`
