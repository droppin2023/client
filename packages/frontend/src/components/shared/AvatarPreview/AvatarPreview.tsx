import Image from 'next/image'

import * as sty from './AvatarPreview.styles'
import type { AvatarPreviewProps } from './AvatarPreview.types'

const AvatarPreview = ({ img, ringColor, css }: AvatarPreviewProps) => {
  return (
    <div css={[sty.container, ...(css || [])]}>
      <div css={[sty.ring(ringColor)]}></div>
      <Image css={[sty.img]} src={img} alt="Profile Image" width={30} height={30} />
    </div>
  )
}

export default AvatarPreview
