import { useState } from 'react'

import { Flex, Stat, Text } from '@chakra-ui/react'

import { background2 } from '@constants/colors'

import Done from '@components/icons/Done'
import QuestDetailModal from '@components/shared/QuestCard/components/QuestDetailModal'

import { Status } from '@components/queries/common'
import UserSideModal from './components/UserSideModal'
import { COLOR_MAPPING } from './QuestCard.constants'
import type { QuestCardProps } from './QuestCard.types'
import { MOCK_QUEST_STATUS, ONE_QUEST_DETAIL } from '@mockData'
import NotLoginedModal from '../NotLoginedModal'

const QuestCard = ({ quest, questType }: QuestCardProps) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [isUserSideModalOpen, setIsUserSideModalOpen] = useState(false)
  const [isNotLoginedModalOpen, setIsNotLoginedModalOpen] = useState(false)
  // TODO : add real quest data from {quest.id, username}
  const userQuest = MOCK_QUEST_STATUS
  const isLogin = false
  // const userQuest = false
  // const questDetail = ONE_QUEST_DETAIL
  const status = isLogin ? userQuest.status : Status.noStatus
  // TODO : isLogin

  const handleCardClick = () => {
    if (!isLogin) setIsNotLoginedModalOpen(true)
    else {
      if (status == Status.noStatus) setIsDetailModalOpen(true)
      else setIsUserSideModalOpen(true)
    }
  }

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
        onClick={handleCardClick}
      >
        {status === Status.accepted && (
          <Done position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
        )}
        <Text as="b">{quest.name}</Text>
        <Text as="b" color={COLOR_MAPPING[status]}>
          {`${quest.engageScore.number} ${quest.engageScore.unit}`}
        </Text>
      </Flex>
      {/* will open the quest detail modal if no status. else track the user's current status */}
      {status === Status.noStatus ? (
        <QuestDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          questType={questType}
          quest={quest}
        />
      ) : (
        <UserSideModal
          isOpen={isUserSideModalOpen}
          onClose={() => setIsUserSideModalOpen(false)}
          questType={questType}
          quest={quest}
          questStatus={status}
          userSubmission={userQuest.userSubmission}
          communityMessage={userQuest.communityMessage}
          community={userQuest.community}
        />
      )}
      <NotLoginedModal
        isOpen={isNotLoginedModalOpen}
        onClose={() => setIsNotLoginedModalOpen(false)}
      />
    </>
  )
}

export default QuestCard
