import Image from 'next/image'

import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import { foreground, orange, orangeHighlight } from '@constants/colors'

import bannerOrnamentImg from './assets/banner-ornament.svg'
import coverImg from './assets/cover-img.png'
import * as sty from './CoverSection.styles'

const CoverSection = () => {
  return (
    <div css={[sty.container]}>
      <Image src={bannerOrnamentImg} alt="banner" css={[sty.bannerOrnament]} />
      <div css={[sty.content]}>
        <Flex justifyContent={'space-between'} alignItems="center">
          <VStack spacing="12px" alignItems={'left'}>
            <Text fontSize="4xl" as="b" lineHeight={1.2}>
              Explore, Join DAOs and get Rewards from activities.
            </Text>
            <Text fontSize="lg" lineHeight={1.2}>
              Discover new and interesting DAOs and join them with simple but secure zk-based
              claims. And get different rewards to enjoy on-chain native social life! – XP, Badges,
              SBTs.
            </Text>
            <HStack spacing={5}>
              <Button
                variant="filled"
                size="lg"
                bgColor={orange}
                _hover={{ bg: orangeHighlight }}
                width="30%"
              >
                Try it now
              </Button>
              <Button variant="link" color={foreground}>
                Do you want to create your own community?
              </Button>
            </HStack>
          </VStack>
          <Image src={coverImg} alt="Cover Image" width={400} height={375} />
        </Flex>
      </div>
    </div>
  )
}

export default CoverSection
