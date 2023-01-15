import { SerializedStyles } from '@emotion/react'

import { StaticImageData } from 'next/image'

export interface AvatarPreviewProps {
  img: StaticImageData
  ringColor: string
  css?: [SerializedStyles]
}
