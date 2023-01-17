import { Flex, Text } from '@chakra-ui/react'

import { orange, primary, secondaryWeak } from '@constants/colors'

import Done from '@components/icons/Done'

import type { QuestCardProps } from './QuestCard.types'

// TODO: get reputation unit from context later
const QuestCard = ({ name, reward, isCompleted = false }: QuestCardProps) => {
  return (
    <Flex
      position="relative"
      width="100%"
      textAlign={'center'}
      border={`2px solid ${isCompleted ? primary : orange}`}
      borderRadius="20px"
      padding="16px"
      bg={secondaryWeak}
      direction="column"
      alignItems="center"
      justifyContent={'center'}
    >
      {isCompleted && (
        <Done position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
      )}
      <Text as="b">{name}</Text>
      <Text as="b" color={isCompleted ? primary : orange}>
        {reward}
      </Text>
    </Flex>
  )
}

export default QuestCard
