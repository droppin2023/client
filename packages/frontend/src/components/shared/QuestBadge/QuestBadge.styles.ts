import { css } from 'twin.macro'

export const imgSlot = (isLocked: boolean) => css`
  border-radius: 16px;
  position: relative;
  ${isLocked ? 'opacity: 0.3' : ''};
  width: 180px;
  height: 180px;
  aspect-ratio: 1 / 1;
`

export const img = css`
  border-radius: 16px;
  width: 180px;
  height: 180px;
`
