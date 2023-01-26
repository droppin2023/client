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

import type { DaoMemberSectionProps, MemberTableRow } from './DaoMembersSection.types'

import { orange, primary } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import * as sty from './DaoMembersSection.styles'

// TODO: integrate real data via props and context API
import { ONE_USER_DETAIL, ONE_COMMUNITY } from '@mockData'

// TODO: notifications
const DaoMembersSection = ({ members }: DaoMemberSectionProps) => {
  const { id } = useDaoPageContext()

  // TODO: need to fetching for each member info
  const memberListDetailed = ONE_COMMUNITY.members

  const renderTableRow = ({ number, name, img, repScore, quests, badges }: MemberTableRow) => {
    return (
      <Tr>
        <Td isNumeric color={primary}>
          {number}
        </Td>
        <Td>
          <HStack>
            <Image src={img} alt={name} width={24} height={24} css={[sty.memberImage]} />
            <Text color={primary}>{name}</Text>
          </HStack>
        </Td>
        <Td color={orange}>{repScore}</Td>
        <Td isNumeric color={primary}>
          {quests}
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
            <Th>Badges</Th>
          </Tr>
        </Thead>
        <Tbody>
          {memberListDetailed.map((memberDetails, index) => {
            const engagement = memberDetails.engageScore

            const badges = memberDetails.badges

            // // compute total quests
            // let totalQuests = 0
            // for (const questGroup of memberDetails.quests) {
            //   totalQuests += questGroup.length
            // }

            return renderTableRow({
              number: index + 1,
              name: memberDetails.name,
              img: memberDetails.image,
              repScore: `${engagement.number} ${engagement.unit}`,
              quests: memberDetails.quests.length,
              badges: (
                <Wrap>
                  {badges.map((item, index) => (
                    <WrapItem key={index}>
                      <Badge color={primary}>{item.name}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
              ),
            })
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default DaoMembersSection
