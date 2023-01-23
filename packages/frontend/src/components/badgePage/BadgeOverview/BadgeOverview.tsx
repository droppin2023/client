import { useState } from 'react'

import Image from 'next/image'

import { Badge, Box, Button, Flex, HStack, IconButton, Text, VStack } from '@chakra-ui/react'

import AvatarPreview from '@components/shared/AvatarPreview'

import { orange, orangeHighlight } from '@constants/colors'

import bannerOrnament from './assets/banner-ornament.svg'

import * as sty from './BadgeOverview.styles'
import type { BadgeOverviewProps } from './BadgeOverview.types'

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
  return (
    <>
      <Box width="100%" height="auto" position="relative">
        <Image src={bannerOrnament} alt="banner ornament" css={[sty.bannerOrnament]} />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <HStack alignItems="flex-start" gap="32px" width="77vw">
            <Image src={logo} alt={name} width={200} height={200} css={[sty.badgeImage]} />
            <VStack alignItems={'flex-start'} width="100%">
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
                  <Button leftIcon={<Text>+</Text>} bg={orange} _hover={{ bg: orangeHighlight }}>
                    Claim Now
                  </Button>
                </HStack>
              </Flex>
            </VStack>
          </HStack>
        </Box>
      </Box>
      {/* <EditCommunityForm
        isOpen={isEditCommunityFormOpen}
        onClose={() => setIsEditCommunityFormOpen(false)}
        badges={badges}
        members={memberList}
        name={name}
        img={imgUrl}
        description={description}
        chain={chain}
        discord={''}
        website={website as string}
        category={category}
        owner={owner}
      /> */}
    </>
  )
}

export default BadgeOverview
