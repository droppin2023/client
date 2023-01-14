import { css } from 'twin.macro'

import bannerOrnamentImg from './assets/banner-ornament.svg'

export const container = css`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const bannerOrnament = css`
  background-image: url(${bannerOrnamentImg});
  position: absolute;
  top: -140px;
  left: 0;
  z-index: 0;
`
export const content = css`
  width: 90%;
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
