import Image from 'next/image'

import { Card, CardBody, Text } from '@chakra-ui/react'

import { primary } from '@constants/colors'

import placeholderImg from './assets/placeholder.jpeg'
import * as sty from './DAOCard.styles'
import type { DAOCardProps } from './DAOCard.types'

const DAOCard = ({ imgUrl = placeholderImg, name, memberCount, repScore, order }: DAOCardProps) => {
  return (
    <Card variant="unstyled" width="160px">
      <CardBody>
        <div css={[sty.imgSlot]}>
          <Image src={imgUrl} alt="daoImage" width={160} height={160} />
          <Text
            fontSize="2xl"
            as="b"
            textColor={primary}
            position="absolute"
            top={0}
            left="8px"
          >{`#${order}`}</Text>
        </div>
        <Text fontSize={'2xl'} as="b">
          {name}
        </Text>
        <Text fontSize={'lg'}>{`${memberCount.toString()} members`}</Text>
        <Text fontSize={'lg'}>{`${repScore.toString()}/5 rep`}</Text>
      </CardBody>
    </Card>
  )
}

export default DAOCard
