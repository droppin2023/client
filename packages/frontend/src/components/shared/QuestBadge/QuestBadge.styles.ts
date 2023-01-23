import { css } from 'twin.macro'

export const imgSlot = (isLocked: boolean) => css`
  border-radius: 16px;
  position: relative;
  ${isLocked ? 'opacity: 0.3' : ''};
`

export const img = css`
  border-radius: 16px;
`
