import Image from 'next/image'

import { Box, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import { orange, orangeHighlight } from '@constants/colors'

import { useRouter } from 'next/router'
import bannerOrnamentImg from './assets/banner-ornament.svg'
import coverImg from './assets/cover-img.png'
import * as sty from './CoverSection.styles'

const CoverSection = () => {
  const router = useRouter()

  return (
    <Box css={[sty.container]}>
      <Image src={bannerOrnamentImg} alt="banner" css={[sty.bannerOrnament]} />
      <div css={[sty.content]}>
        <Flex justifyContent={'space-between'} alignItems="center">
          <VStack spacing="12px" alignItems={'left'} width="60%">
            <Text fontSize="4xl" as="b" lineHeight={1.2}>
              An{' '}
              <Text as="span" color={orange}>
                Engagement Layer
              </Text>{' '}
              for your Community
            </Text>
            <Text fontSize="lg" lineHeight={1.2}>
              Discover new and interesting communities and join them with simple but secure zk based
              quests. And get different rewards to enjoy on-chain native social life!
            </Text>
            <HStack spacing={5}>
              <Button
                variant="filled"
                size="lg"
                bgColor={orange}
                _hover={{ bg: orangeHighlight }}
                onClick={() => router.push('/create')}
              >
                Create your community now
              </Button>
            </HStack>
          </VStack>
          <Image src={coverImg} alt="Cover Image" width={450} height={421} />
        </Flex>
      </div>
    </Box>
  )
}

export default CoverSection
