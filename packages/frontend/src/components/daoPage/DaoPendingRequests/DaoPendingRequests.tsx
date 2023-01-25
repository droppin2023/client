import { SetStateAction, useState } from 'react'

import Image from 'next/image'

import { Box, HStack, Table, TableContainer, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'

import { background2, orange, primary } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import QuestReviewForm from './components/QuestReviewForm'

import wipIllustration from './assets/wip-illustration.svg'
import * as sty from './DaoPendingRequests.styles'
import type { DaoPendingRequestsProps, PendingRequestsTableRow } from './DaoPendingRequests.types'

const DaoPendingRequests = ({ requests }: DaoPendingRequestsProps) => {
  const { repUnit } = useDaoPageContext()
  const [isShowReviewModal, setIsShowReviewModal] = useState(false)
  const [reviewContent, setReviewContent] = useState({})

  const onClick = (item: any) => {
    setReviewContent(item)
    setIsShowReviewModal(true)
  }

  console.log(requests)
  const renderTableRow = ({ name, img, questName, engageScore, item }: PendingRequestsTableRow) => {
    return (
      <Box
        borderRadius="16px"
        backgroundColor={background2}
        width="100%"
        cursor="pointer"
        onClick={async () => await onClick(item)}
      >
        <Tr display="flex" justifyContent={'space-between'}>
          <Td>
            <HStack>
              <Image src={img} alt={name} width={24} height={24} css={[sty.memberImage]} />
              <Text color={primary}>{name}</Text>
            </HStack>
          </Td>
          <Td color={orange}>{questName}</Td>
          <Td color={primary}>{engageScore}</Td>
        </Tr>
      </Box>
    )
  }

  return (
    <>
      {requests.length === 0 ? (
        <Box margin="48px 0">
          <Image src={wipIllustration} alt="Work in Progress" width={320} height={320} />
          <Text fontSize={'xl'} margin="24px 0">
            Everyone is working hard, wait for their good news!
          </Text>
        </Box>
      ) : (
        <TableContainer>
          <Table variant="unstyled">
            <Tbody>
              <VStack spacing={3}>
                {requests.map(
                  (item: {
                    quest: {
                      id: number
                      name: string
                      engageScore: { number: number; unit: string }
                      description: string
                    }
                    requestUser: {
                      username: string
                      address: string
                      image: any
                      name: string
                    }
                    requestAnswer: string
                  }) =>
                    renderTableRow({
                      name: item.requestUser.name,
                      img: item.requestUser.image,
                      questName: item.quest.name,
                      engageScore: `${item.quest.engageScore.number} ${item.quest.engageScore.unit}`,
                      item: item,
                    }),
                )}
              </VStack>
            </Tbody>
          </Table>
        </TableContainer>
      )}
      {/* TODO : Handle these reviewContent type */}
      <QuestReviewForm
        isOpen={isShowReviewModal}
        onClose={() => setIsShowReviewModal(false)}
        reviewContent={reviewContent}
      />
    </>
  )
}

export default DaoPendingRequests
