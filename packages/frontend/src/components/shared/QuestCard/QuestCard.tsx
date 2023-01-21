import { useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { background2, orange, primary } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import Done from '@components/icons/Done'
import QuestDetailModal from '@components/shared/QuestCard/components/QuestDetailModal'

import type { QuestCardProps } from './QuestCard.types'

const QuestCard = ({ name, reward, questType, isCompleted = false }: QuestCardProps) => {
  const { repUnit } = useDaoPageContext()

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  return (
    <>
      <Flex
        position="relative"
        width="100%"
        textAlign={'center'}
        border={`2px solid ${isCompleted ? primary : orange}`}
        borderRadius="20px"
        padding="16px"
        bg={background2}
        direction="column"
        alignItems="center"
        justifyContent={'center'}
        cursor="pointer"
        onClick={() => setIsDetailModalOpen(true)}
      >
        {isCompleted && (
          <Done position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
        )}
        <Text as="b">{name}</Text>
        <Text as="b" color={isCompleted ? primary : orange}>
          {`${reward} ${repUnit}`}
        </Text>
      </Flex>
      <QuestDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        questType={questType}
        questTitle={name}
      />
    </>
  )
}

export default QuestCard
