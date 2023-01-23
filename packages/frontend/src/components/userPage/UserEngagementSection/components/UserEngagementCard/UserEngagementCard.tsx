import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

import { background2, secondary } from '@constants/colors'

import * as sty from './UserEngagementCard.styles'
import type { UserEngagementCardProps } from './UserEngagementCard.types'

const UserEngagementCard = ({
  engageScore: { number, unit },
  community: { image, name },
}: UserEngagementCardProps) => {
  return (
    <Flex
      bgColor={background2}
      borderRadius="16px"
      padding="16px"
      width="100%"
      justifyContent={'space-between'}
    >
      <HStack spacing={5}>
        <Image src={image} alt="Community Image" width={48} height={48} css={[sty.daoImage]} />
        <VStack align="left">
          <Text textAlign={'left'} as="b">
            {name}
          </Text>
          <Text textAlign={'left'} color={secondary}>
            {unit}
          </Text>
        </VStack>
      </HStack>
      <VStack>
        <VStack align="right">
          <Text textAlign={'right'} as="b">{`${number} DROP`}</Text>
          <Text textAlign={'right'} color={secondary}>{`${number} ${unit}`}</Text>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default UserEngagementCard
