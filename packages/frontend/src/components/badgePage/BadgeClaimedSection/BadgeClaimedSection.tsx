import { Flex, HStack, Text, VStack } from '@chakra-ui/react'

import Lock from '@components/icons/Lock'
import { background2, primary, secondary } from '@constants/colors'
import type { BadgeClaimedSectionProps } from './BadgeClaimedSection.types'

const BadgeClaimdSection = ({ address, claimedBadge }: BadgeClaimedSectionProps) => {
  return (
    <>
      <VStack alignItems={'flex-start'} spacing={4} width="70%">
        <Flex justifyContent={'space-between'} alignItems="center" width="100%">
          <Text fontSize="4xl" as="b" lineHeight="64px" color={primary}>
            <HStack spacing={2}>
              <Lock color={primary} />
              <span>Badge Contract</span>
            </HStack>
          </Text>
        </Flex>{' '}
        <Flex
          bgColor={background2}
          borderRadius="16px"
          padding="16px"
          width="100%"
          justifyContent={'space-between'}
        >
          <Text textAlign={'right'} as="b">
            Contract Address
          </Text>
          <Text color={secondary} textAlign={'right'} as="b">{`${address}`}</Text>
        </Flex>
        <Flex justifyContent={'space-between'} alignItems="center" width="100%">
          <Text fontSize="4xl" as="b" lineHeight="64px" color={primary}>
            <HStack spacing={2}>
              <Lock color={primary} />
              <span>My Claimed Badge Contract</span>
            </HStack>
          </Text>
        </Flex>
        <Flex
          bgColor={background2}
          borderRadius="16px"
          padding="16px"
          width="100%"
          justifyContent={'space-between'}
        >
          <Text textAlign={'right'} as="b">
            Contract Address
          </Text>
          <Text color={secondary} textAlign={'right'} as="b">{`${claimedBadge?.address}`}</Text>
        </Flex>
        <Flex
          bgColor={background2}
          borderRadius="16px"
          padding="16px"
          width="100%"
          justifyContent={'space-between'}
        >
          <Text textAlign={'right'} as="b">
            Token ID
          </Text>
          <Text color={secondary} textAlign={'right'} as="b">{`${claimedBadge?.tokenId}`}</Text>
        </Flex>
        <Flex
          bgColor={background2}
          borderRadius="16px"
          padding="16px"
          width="100%"
          justifyContent={'space-between'}
        >
          <Text textAlign={'right'} as="b">
            Token Standard
          </Text>
          <Text
            color={secondary}
            textAlign={'right'}
            as="b"
          >{`${claimedBadge?.tokenStandard}`}</Text>
        </Flex>
        <Flex
          bgColor={background2}
          borderRadius="16px"
          padding="16px"
          width="100%"
          justifyContent={'space-between'}
        >
          <Text textAlign={'right'} as="b">
            Chain
          </Text>
          <Text color={secondary} textAlign={'right'} as="b">{`${claimedBadge?.chain}`}</Text>
        </Flex>
      </VStack>
    </>
  )
}

export default BadgeClaimdSection
