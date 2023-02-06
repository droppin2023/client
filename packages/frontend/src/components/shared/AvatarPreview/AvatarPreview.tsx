import { Avatar } from '@chakra-ui/react'
import Image from 'next/image'

import * as sty from './AvatarPreview.styles'
import type { AvatarPreviewProps } from './AvatarPreview.types'

const AvatarPreview = ({ img, ringColor, css, name = '' }: AvatarPreviewProps) => {
  return (
    <div css={[sty.container, ...(css || [])]}>
      <div css={[sty.ring(ringColor)]}></div>
      {img !== 'none' ? (
        <Image src={img} alt="Profile Image" css={[sty.img]} width={30} height={30} />
      ) : (
        <Avatar name={name} src="" width="30px" height="30px" css={[sty.img]} />
      )}
    </div>
  )
}

export default AvatarPreview
