import Image from 'next/image'

import {
  Badge,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

import type { MemberTableRow } from './DaoMembersSection.types'

// TODO: integrate real data via props and context API
// TODO: integrate reputation unit via context API
import { orange, primary } from '@constants/colors'
import { MOCK_BADGE_LIST, MOCK_USER_LIST } from '@mockData'

// TODO: notifications
const DaoMembersSection = () => {
  const renderTableRow = ({
    number,
    name,
    img,
    repScore,
    quests,
    karma,
    badges,
  }: MemberTableRow) => {
    return (
      <Tr>
        <Td isNumeric color={primary}>
          {number}
        </Td>
        <Td>
          <HStack>
            <Image src={img} alt={name} width={24} height={24} />
            <Text color={primary}>{name}</Text>
          </HStack>
        </Td>
        <Td color={orange}>{repScore}</Td>
        <Td isNumeric color={primary}>
          {quests}
        </Td>
        <Td isNumeric color={primary}>
          {karma}
        </Td>
        <Td>{badges}</Td>
      </Tr>
    )
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th isNumeric>No.</Th>
            <Th>Member</Th>
            <Th>Reputation</Th>
            <Th isNumeric>Quests</Th>
            <Th isNumeric>Karma</Th>
            <Th>Badges</Th>
          </Tr>
        </Thead>
        <Tbody>
          {MOCK_USER_LIST.map((item, index) =>
            renderTableRow({
              number: index + 1,
              name: item.name,
              img: item.img,
              repScore: '375 LEP',
              quests: 0,
              karma: 0,
              badges: (
                <Wrap>
                  {MOCK_BADGE_LIST.map((item, index) => (
                    <WrapItem key={index}>
                      <Badge color={primary}>{item.name}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              ),
            }),
          )}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default DaoMembersSection
