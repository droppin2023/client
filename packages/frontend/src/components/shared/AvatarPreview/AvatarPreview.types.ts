import { SerializedStyles } from '@emotion/react'

import { StaticImageData } from 'next/image'

export interface AvatarPreviewProps {
  img: StaticImageData | string
  ringColor: string
  css?: [SerializedStyles]
}
