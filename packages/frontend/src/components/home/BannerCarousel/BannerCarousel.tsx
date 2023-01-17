import Image from 'next/image'

import { Flex } from '@chakra-ui/react'

import bannerA from './assets/banner-1.png'
import bannerB from './assets/banner-2.png'

const BannerCarousel = () => {
  return (
    <Flex>
      <Image src={bannerA} alt="banner 1" height={256} />
      <Image src={bannerB} alt="banner 2" height={256} />
    </Flex>
  )
}

export default BannerCarousel
