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

// TODO: notifications
const DaoMembersSection = ({ members, owner }: DaoMemberSectionProps) => {
  const { id } = useDaoPageContext()

  // TODO: need to fetching for each member info
  // const memberss = ONE_COMMUNITY.members

  const renderTableRow = ({
    number,
    name,
    img,
    repScore,
    quests,
    badges,
    isOwner,
  }: MemberTableRow) => {
    return (
      <Tr key={number}>
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
        <Td isNumeric={isOwner} color={primary}>
          {isOwner ? 'OWNER' : quests}
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
          {renderTableRow({
            isOwner: true,
            number: 1,
            name: owner.name,
            img: owner.image,
            repScore: 'OWNER',
            quests: 0,
            badges: 'OWNER',
          })}
          {members.map((memberDetails, index) => {
            const engagement = memberDetails.engageScore

            const badges = memberDetails.badges

            // // compute total quests
            // let totalQuests = 0
            // for (const questGroup of memberDetails.quests) {
            //   totalQuests += questGroup.length
            // }

            return renderTableRow({
              isOwner: false,
              number: index + 2,
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
