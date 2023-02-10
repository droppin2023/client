import { css } from 'twin.macro'

export const container = css`
  width: 100vw;
  /* height: auto; */
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const bannerOrnament = css`
  width: 100%;
  position: absolute;
  top: -180px;
  left: 0;
  z-index: 0;
`
export const content = css`
  width: 85%;
  z-index: 5;
`

export const textContent = css`
  display: flex;
  flex-direction: column;
`

export const btnContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  row-gap: 24px;
`
