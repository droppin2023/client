import { useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { background2 } from '@constants/colors'

import Done from '@components/icons/Done'
import QuestDetailModal from '@components/shared/QuestCard/components/QuestDetailModal'

import { Status } from '@components/queries/common'
import { COLOR_MAPPING } from './QuestCard.constants'
import type { QuestCardProps } from './QuestCard.types'

const QuestCard = ({
  name,
  reward,
  repUnit,
  questType,
  id,
  status = Status.noStatus,
}: QuestCardProps) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

  return (
    <>
      <Flex
        position="relative"
        width="100%"
        textAlign={'center'}
        border={`2px solid ${COLOR_MAPPING[status]}`}
        borderRadius="20px"
        padding="16px"
        bg={background2}
        direction="column"
        alignItems="center"
        justifyContent={'center'}
        cursor="pointer"
        onClick={() => setIsDetailModalOpen(true)}
      >
        {status === Status.claimed && (
          <Done position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
        )}
        <Text as="b">{name}</Text>
        <Text as="b" color={COLOR_MAPPING[status]}>
          {`${reward} ${repUnit}`}
        </Text>
      </Flex>
      <QuestDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        questType={questType}
        questTitle={name}
        questID={id}
      />
    </>
  )
}

export default QuestCard
