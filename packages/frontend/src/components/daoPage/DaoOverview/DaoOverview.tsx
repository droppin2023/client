import { useState } from 'react'

import Image from 'next/image'

import { Badge, Box, Button, Flex, HStack, IconButton, Text, VStack } from '@chakra-ui/react'

import DiscordIcon from '@components/icons/DiscordIcon'
import WebsiteIcon from '@components/icons/WebsiteIcon'
import AvatarPreview from '@components/shared/AvatarPreview'

import { background, foreground, orange, orangeHighlight, secondary } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import Settings from '@components/icons/Settings'

import bannerOrnament from './assets/banner-ornament.svg'
import EditCommunityForm from './components/EditCommunityForm'
import * as sty from './DaoOverview.styles'
import type { DaoOverviewProps } from './DaoOverview.types'

const DaoOverview = ({
  name = 'Drop DAO',
  minter = 'Droppin Team',
  memberCount = 0,
  memberList = [],
  created = new Date(),
  chain = '',
  category = 'NFT',
  repScore = 0,
  description = '',
  imgUrl = './assets/placeholder.jpeg',
  badges,
}: DaoOverviewProps) => {
  const [isEditCommunityFormOpen, setIsEditCommunityFormOpen] = useState(false)

  const { isAdmin, repUnit } = useDaoPageContext()

  return (
    <>
      <Box width="100%" height="auto" position="relative">
        <Image src={bannerOrnament} alt="banner ornament" css={[sty.bannerOrnament]} />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <Flex alignItems="flex-start" gap="32px" maxWidth="80%">
            <Image src={imgUrl} alt={name} width={200} height={200} css={[sty.daoImage]} />
            <VStack alignItems={'flex-start'}>
              <Flex alignItems={'center'} justifyContent="space-between" width="100%">
                <HStack spacing={5}>
                  <Text fontSize="4xl" lineHeight={1.2} as="b">
                    {name}
                  </Text>
                  <Badge
                    fontSize="xl"
                    bg={background}
                    padding="4px 16px"
                    borderRadius="6px"
                  >{`${repScore} ${repUnit}`}</Badge>
                </HStack>
                {!isAdmin && (
                  <Button leftIcon={<Text>+</Text>} bg={orange} _hover={{ bg: orangeHighlight }}>
                    Join
                  </Button>
                )}
                {isAdmin && (
                  <Button
                    leftIcon={<Settings />}
                    bg={background}
                    _hover={{ bg: secondary }}
                    onClick={() => setIsEditCommunityFormOpen(true)}
                  >
                    Edit
                  </Button>
                )}
              </Flex>
              <HStack spacing={5}>
                <Text>
                  by <Text as="b">{minter}</Text>
                </Text>
                <HStack spacing={3}>
                  <IconButton
                    aria-label="website"
                    variant="outline"
                    borderRadius="9999px"
                    borderColor={foreground}
                  >
                    <WebsiteIcon />
                  </IconButton>
                  <IconButton
                    aria-label="discord"
                    variant="outline"
                    borderRadius="9999px"
                    borderColor={foreground}
                  >
                    <DiscordIcon />
                  </IconButton>
                </HStack>
              </HStack>
              <Text>{description}</Text>
              <HStack>
                <HStack spacing="-12px">
                  {memberList.slice(0, 3).map((item, index) => (
                    <AvatarPreview key={index} ringColor={orange} img={item.img} />
                  ))}
                </HStack>
                <Text>
                  Members <strong>{memberCount}</strong>
                </Text>
                <Text>&#x2022;</Text>
                <Text>
                  Created{' '}
                  <strong>
                    {created.toLocaleDateString('en-us', { year: 'numeric', month: 'short' })}
                  </strong>
                </Text>
                <Text>&#x2022;</Text>
                <Text>
                  Chain <strong>{chain}</strong>
                </Text>
                <Text>&#x2022;</Text>
                <Text>
                  Category <strong>{category as string}</strong>
                </Text>
              </HStack>
              <Flex></Flex>
            </VStack>
          </Flex>
        </Box>
      </Box>
      <EditCommunityForm
        isOpen={isEditCommunityFormOpen}
        onClose={() => setIsEditCommunityFormOpen(false)}
        badges={badges}
        members={memberList}
        name={name}
        img={imgUrl}
        description={description}
        chain={chain}
        discord={''}
        website={''}
        category={category}
      />
    </>
  )
}

export default DaoOverview
