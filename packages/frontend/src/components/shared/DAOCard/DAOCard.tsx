/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from 'next/image'

import { Card, CardBody, HStack, Text, VStack } from '@chakra-ui/react'

import { foreground, orange, primary } from '@constants/colors'

import AvatarPreview from '../AvatarPreview'
import placeholderImg from './assets/placeholder.jpeg'

//@ts-ignore
import * as sty from './DaoCard.styles'

//@ts-ignore
import type { DaoCardProps } from './DaoCard.types'

const DaoCard = ({
  imgUrl = placeholderImg,
  name,
  memberCount,
  memberList,
  repScore,
  repUnit = 'REP',
  order = 0,
  showBorder = false,
  description,
}: DaoCardProps) => {
  return (
    <Card variant="unstyled" width="200px" minWidth={'160px'} textAlign="left">
      <CardBody>
        <div css={[sty.imgSlot(showBorder)]}>
          <Image src={imgUrl} alt="DAO Image" width={200} height={200} css={[sty.img]} />
          {order > 0 && (
            <Text
              fontSize="2xl"
              as="b"
              textColor={foreground}
              position="absolute"
              top={0}
              left="8px"
            >{`#${order}`}</Text>
          )}

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
          {description && (
            <Text fontSize={'md'} color={foreground}>
              {description}
            </Text>
          )}
          <Text fontSize={'md'} as="b" color={primary}>{`${memberCount.toString()} members`}</Text>
          <Text fontSize={'md'} as="b" color={orange}>{`${repScore.toString()} ${repUnit}`}</Text>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default DaoCard
