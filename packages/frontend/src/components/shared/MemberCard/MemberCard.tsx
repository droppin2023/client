import Image from 'next/image'

import { Flex, Text, VStack } from '@chakra-ui/react'

import { orange } from '@constants/colors'

import placeholderAvatar from './assets/placeholder-avatar.png'
import * as sty from './MemberCard.styles'
import type { MemberCardProps } from './MemberCard.types'

const MemberCard = ({ rank = 0, avatar = placeholderAvatar, name }: MemberCardProps) => {
  return (
    <VStack>
      <div css={[sty.avatarSlot]}>
        {rank > 0 && (
          <Flex
            justifyContent="center"
            alignItems="center"
            width="36px"
            height="36px"
            position="absolute"
            bgColor={orange}
            borderRadius={99}
          >
            <Text fontSize="xl" as="b">
              {rank}
            </Text>
          </Flex>
        )}

        <Image src={avatar} alt="Avatar" css={[sty.avatar]} width={176} height={176} />
      </div>
      <Text fontSize="xl" as="b">
        {name}
      </Text>
    </VStack>
  )
}

export default MemberCard
