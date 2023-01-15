import { css } from 'twin.macro'

export const container = css`
  position: relative;
`

export const ring = (ringColor: string) => css`
  position: absolute;
  border: 2px solid ${ringColor};
  border-radius: 9999px;

  width: 36px;
  height: 36px;
`

export const img = css`
  position: relative;
  top: 3px;
  left: 3px;
  border-radius: 9999px;
`
