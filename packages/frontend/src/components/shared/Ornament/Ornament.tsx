import Image from 'next/image'

import { getImgFromVariant } from './Ornament.helpers'
import * as sty from './Ornament.styles'
import type { OrnamentProps } from './Ornament.types'

const Ornament = ({ variant = 'stars', top, bottom, left, right }: OrnamentProps) => {
  return (
    <Image
      src={getImgFromVariant(variant)}
      alt="Ornament"
      css={[sty.ornament({ top, bottom, left, right })]}
    />
  )
}

export default Ornament
