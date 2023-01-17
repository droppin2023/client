import { Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import QuestBadge from '@components/shared/QuestBadge'
import { primary, secondaryWeak } from '@constants/colors'

import type { DaoBadgesSectionProps } from './DaoBadgesSection.types'

const DaoBadgesSection = ({ badges }: DaoBadgesSectionProps) => {
  return (
    <VStack>
      <SimpleGrid columns={5} gap={8}>
        {badges.map((item, index) => (
          <QuestBadge key={index} name={item.name} isLocked={false} />
        ))}

        {/* TODO: onclick functionality */}
        <Flex
          bg={secondaryWeak}
          color={primary}
          width="200px"
          height="200px"
          borderRadius="20px"
          border={`2px dashed ${primary}`}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="6xl">+</Text>
          <Text>Create badge</Text>
        </Flex>
      </SimpleGrid>
    </VStack>
  )
}

export default DaoBadgesSection
