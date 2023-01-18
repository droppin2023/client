import Image from 'next/image'

import { Box, HStack, Table, TableContainer, Tbody, Td, Text, Tr, VStack } from '@chakra-ui/react'

import { orange, primary, secondaryWeak } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import wipIllustration from './assets/wip-illustration.svg'
import type { DaoPendingRequestsProps, PendingRequestsTableRow } from './DaoPendingRequests.types'

const DaoPendingRequests = ({ requests }: DaoPendingRequestsProps) => {
  const { repUnit } = useDaoPageContext()

  const renderTableRow = ({
    name,
    img,
    questName,
    questReward,
    questStatus,
  }: PendingRequestsTableRow) => {
    return (
      <Box borderRadius="16px" backgroundColor={secondaryWeak} width="100%">
        <Tr display="flex" justifyContent={'space-between'}>
          <Td>
            <HStack>
              <Image src={img} alt={name} width={24} height={24} />
              <Text color={primary}>{name}</Text>
            </HStack>
          </Td>
          <Td color={orange}>{questName}</Td>
          <Td color={primary}>{questStatus}</Td>
          <Td color={orange}>{questReward}</Td>
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
                    user: { name: any; img: any }
                    quest: { name: any; reward: any }
                    status: any
                  }) =>
                    renderTableRow({
                      name: item.user.name,
                      img: item.user.img,
                      questName: item.quest.name,
                      questReward: `${item.quest.reward} ${repUnit}`,
                      questStatus: item.status,
                    }),
                )}
              </VStack>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default DaoPendingRequests
