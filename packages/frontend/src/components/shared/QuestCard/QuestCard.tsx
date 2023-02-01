import { useEffect, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { background2 } from '@constants/colors'

import Done from '@components/icons/Done'
import QuestDetailModal from '@components/shared/QuestCard/components/QuestDetailModal'

import { Status } from '@components/queries/common'
import useGetUserStatusInQuest from '@components/queries/useGetUserStatusInQuest'
import { useUserContext } from '@context/UserContext'
import UserSideModal from './components/UserSideModal'
import { colorMap } from './QuestCard.helpers'
import type { QuestCardProps } from './QuestCard.types'

const QuestCard = ({ quest, questType, showNoDetail }: QuestCardProps) => {
  const { isLoggedIn, user } = useUserContext()

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)
  const [isUserSideModalOpen, setIsUserSideModalOpen] = useState(false)
  const {
    data: userQuest,
    isLoading,
    error,
  } = useGetUserStatusInQuest({ questId: Number(quest.id), username: user?.username as string })

  const status = isLoggedIn ? userQuest.status : Status.noStatus

  const handleCardClick = () => {
    if (!showNoDetail) {
      if (!isLoggedIn) setIsDetailModalOpen(true)
      else if (status === Status.noStatus) setIsDetailModalOpen(true)
      else setIsUserSideModalOpen(true)
    }
  }

  useEffect(() => {
    console.log('USER_QUEST', userQuest)
    console.log('STATUS', status)
  }, [])

  return (
    <>
      <Flex
        position="relative"
        width="100%"
        textAlign={'center'}
        border={`2px solid ${colorMap(status as Status)}`}
        borderRadius="20px"
        padding="16px"
        bg={background2}
        direction="column"
        alignItems="center"
        justifyContent={'center'}
        cursor={showNoDetail ? 'auto' : 'pointer'}
        onClick={handleCardClick}
      >
        {status === Status.accepted && (
          <Done position="absolute" right="-12px" top="-12px" width="28px" height="28px" />
        )}
        <Text as="b">{quest.name}</Text>
        <Text as="b" color={colorMap(status as Status)}>
          {`${quest.engageScore.number} ${quest.engageScore.unit}`}
        </Text>
      </Flex>

      {/* will open the quest detail modal if no status. else track the user's current status */}
      <QuestDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        questType={questType}
        quest={quest}
      />

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
    </>
  )
}

export default QuestCard
