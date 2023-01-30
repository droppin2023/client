import { useState } from 'react'

import Image from 'next/image'

import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'

import AvatarPreview from '@components/shared/AvatarPreview'

import { orange, orangeHighlight } from '@constants/colors'

import bannerOrnament from './assets/banner-ornament.svg'

import * as sty from './BadgeOverview.styles'
import type { BadgeOverviewProps } from './BadgeOverview.types'
import ClaimModal from './components/ClaimModal'

const BadgeOverview = ({
  id,
  name = 'NewBie Badge',
  symbol,
  logo = './assets/placeholder.jpeg',
  community,
  description,
  isDefault,
  address: string,
  holderList,
  requiredQuests,
  requiredEngageScore,
  requiredPrice,
}: BadgeOverviewProps) => {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false)

  return (
    <>
      <Flex
        width="100vw"
        position="relative"
        justifyContent={'center'}
        alignItems="center"
        bgImage={bannerOrnament.src}
        padding="88px 0"
        borderRadius="0 0 48px 48px"
      >
        <Flex alignItems="center" gap="32px" width="80%" justifyContent="flex-start">
          <Image src={logo} alt={name} width={200} height={200} css={[sty.badgeImage]} />
          <VStack alignSelf="start" marginLeft={10}>
            <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
              <HStack spacing={5}>
                <Text fontSize="4xl" lineHeight={1.2} as="b">
                  {name}
                </Text>
                <Text fontSize="4xl" lineHeight={1.2}>
                  {symbol}
                </Text>
              </HStack>
            </Flex>
            <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
              <HStack spacing={6}>
                <Text>
                  by <Text as="b">{community.name}</Text>
                </Text>
                <HStack spacing={3}>
                  <HStack spacing="-12px">
                    {holderList.slice(0, 3).map((item, index) => (
                      <AvatarPreview key={index} ringColor={orange} img={item.image} />
                    ))}
                  </HStack>

                  <Text>
                    <strong>{holderList.length}</strong> holders
                  </Text>
                </HStack>
              </HStack>
            </Flex>
            <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
              <Text>{description}</Text>
            </Flex>
            <Flex alignItems={'center'} justifyContent="left" width="100%" flex={1}>
              <HStack spacing={6}>
                <Text as="b">
                  {requiredPrice.number} {requiredPrice.unit}
                </Text>
                <Button
                  onClick={() => setIsClaimModalOpen(true)}
                  leftIcon={<Text>+</Text>}
                  bg={orange}
                  _hover={{ bg: orangeHighlight }}
                >
                  Claim Now
                </Button>
              </HStack>
            </Flex>
          </VStack>
        </Flex>
      </Flex>
      <ClaimModal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
        badgeName={name}
        badgeLogo={logo}
        badgePrice={requiredPrice}
      />
    </>
  )
}

export default BadgeOverview
