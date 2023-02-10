import { Box, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

import Lock from '@components/icons/Lock'

import type { QuestBadgeProps } from './QuestBadge.types'

import { secondary } from '@constants/colors'
import badgePlaceholderImg from './assets/badge-placeholder.png'
import * as sty from './QuestBadge.styles'

// TODO: implement locked behaviour

const QuestBadge = ({
  daoName = '',
  img = badgePlaceholderImg,
  name,
  recentActivity = '',
  isLocked,
  lockedMessage = '',
  minter,
  onClick = () => {
    return
  },
}: QuestBadgeProps) => {
  return (
    <Box position="relative" onClick={onClick} cursor="pointer">
      {isLocked && (
        <>
          <Box position="absolute" left="0" right="0" top="24px" width="100%" padding="16px">
            <VStack align="center">
              <Lock width="64pxpx" height="64px" />
              <Text as="b" textAlign={'center'}>
                {lockedMessage}
              </Text>
            </VStack>
          </Box>
        </>
      )}

      <VStack width="200px">
        <div css={[sty.imgSlot(isLocked)]}>
          <Image src={img} alt="Badge Image" width={180} height={180} css={[sty.img]} />
          <Text fontSize="lg" as="b" position="absolute" top="8px" left="12px">
            {daoName}
          </Text>
        </div>
        <Text fontSize="2xl" lineHeight={1.2} as="b">
          {name}
        </Text>
        <Text fontSize="md" lineHeight={1} color={secondary} as="b">
          {recentActivity}
        </Text>
        {minter && (
          <Text fontSize="md" lineHeight={1} color={secondary} alignSelf="flex-end">
            minted by {minter}
          </Text>
        )}
      </VStack>
    </Box>
  )
}

export default QuestBadge
