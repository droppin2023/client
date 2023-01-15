import Image from 'next/image'

import { Card, CardBody, HStack, Text, VStack } from '@chakra-ui/react'

import { foreground, orange, primary } from '@constants/colors'

import placeholderImg from './assets/placeholder.jpeg'
import AvatarPreview from './components/AvatarPreview'
import * as sty from './DAOCard.styles'
import type { DAOCardProps } from './DAOCard.types'

const DAOCard = ({
  imgUrl = placeholderImg,
  name,
  memberCount,
  memberList,
  repScore,
  repUnit = 'REP',
  order,
}: DAOCardProps) => {
  return (
    <Card variant="unstyled" width="200px">
      <CardBody>
        <div css={[sty.imgSlot]}>
          <Image src={imgUrl} alt="DAO Image" width={200} height={200} css={[sty.img]} />
          <Text
            fontSize="2xl"
            as="b"
            textColor={foreground}
            position="absolute"
            top={0}
            left="8px"
          >{`#${order}`}</Text>
          <HStack position="absolute" zIndex="5" bottom={2} right="8px" alignItems={'center'}>
            <HStack spacing="-12px">
              {memberList.slice(0, 3).map((item, index) => (
                <AvatarPreview key={index} ringColor={orange} img={item.img} />
              ))}
            </HStack>

            <Text fontSize={'xs'} position="relative" top="4px" as="b">{` + ${
              memberCount > 3 && memberCount - 3
            } more`}</Text>
          </HStack>
        </div>
        <VStack spacing="0px" align={'left'}>
          <Text fontSize={'2xl'} lineHeight={1.8} as="b">
            {name}
          </Text>
          <Text fontSize={'md'} as="b" color={primary}>{`${memberCount.toString()} members`}</Text>
          <Text fontSize={'md'} as="b" color={orange}>{`${repScore.toString()} ${repUnit}`}</Text>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default DAOCard
