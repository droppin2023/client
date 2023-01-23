import Image from 'next/image'

import * as sty from './AvatarPreview.styles'
import type { AvatarPreviewProps } from './AvatarPreview.types'

const AvatarPreview = ({ img, ringColor, css }: AvatarPreviewProps) => {
  return (
    <div css={[sty.container, ...(css || [])]}>
      <div css={[sty.ring(ringColor)]}></div>
      <Image src={img} alt="Profile Image" css={[sty.img]} width={30} height={30} />
    </div>
  )
}

export default AvatarPreview
