import { Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

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
}: QuestBadgeProps) => {
  return (
    <VStack width="200px">
      <div css={[sty.imgSlot]}>
        <Image src={img} alt="Badge Image" width={200} height={200} css={[sty.img]} />
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
  )
}

export default QuestBadge
