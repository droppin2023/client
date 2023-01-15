import { css } from 'twin.macro'

import type { OrnamentPosition } from './Ornament.types'

export const ornament = (props: OrnamentPosition) => css`
  z-index: -1;
  opacity: 0.6;

  position: absolute;
  ${props.top ? `top: ${props.top}` : ''};
  ${props.bottom ? `bottom: ${props.bottom}` : ''};
  ${props.left ? `left: ${props.left}` : ''};
  ${props.right ? `right: ${props.right}` : ''};
`
