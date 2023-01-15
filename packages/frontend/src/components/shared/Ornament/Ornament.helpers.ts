import type { OrnamentVariants } from './Ornament.types'

import ornamentStars from './assets/ornament-stars.svg'

export const getImgFromVariant = (variant: OrnamentVariants) => {
  switch (variant) {
    case 'stars':
      return ornamentStars
  }
}
