import { useState } from 'react'

import Image from 'next/image'

import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from '@chakra-ui/react'

import DiscordIcon from '@components/icons/DiscordIcon'
import WebsiteIcon from '@components/icons/WebsiteIcon'
import AvatarPreview from '@components/shared/AvatarPreview'

// TODO: THIS IS HARDCODED
import BadgeClaimModal from '@components/badgePage/BadgeOverview/components/ClaimModal'

import {
  background,
  discordPurple,
  foreground,
  orange,
  orangeHighlight,
  secondary,
} from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import Settings from '@components/icons/Settings'

import { Category } from '@components/queries/common'
import Link from 'next/link'
import bannerOrnament from './assets/banner-ornament.svg'
import EditCommunityForm from './components/EditCommunityForm'
import * as sty from './DaoOverview.styles'
import type { DaoOverviewProps } from './DaoOverview.types'

const DaoOverview = ({
  name = 'Drop DAO',
  memberCount = 0,
  memberList = [],
  category = Category.Other,
  repScore = 0,
  description = '',
  chain = 'Polygon',
  imgUrl = './assets/placeholder.jpeg',
  badges,
  owner,
  website,
  discordLink = './assets/placeholder.jpeg',
  discordGuildId,
  isLoading,
}: DaoOverviewProps) => {
  const [isEditCommunityFormOpen, setIsEditCommunityFormOpen] = useState(false)

  const [isClaimDefaultBadgeOpen, setIsCreateDefaultBadgeOpen] = useState(false)

  const { isAdmin, repUnit, id } = useDaoPageContext()
  const onHandleJoin = () => {
    console.log('get membership NFT')
    setIsCreateDefaultBadgeOpen(true)
  }
  return (
    <>
      <Box
        width="100%"
        height="auto"
        position="relative"
        padding="88px 0"
        bgImage={bannerOrnament.src}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent={'center'}
          alignItems="center"
        >
          <HStack alignItems="flex-start" gap="32px" width="77vw">
            <Skeleton width="auto" height="auto" isLoaded={!isLoading} borderRadius="16px">
              <Image src={imgUrl} alt={name} width={200} height={200} css={[sty.daoImage]} />
            </Skeleton>
            <VStack alignItems={'flex-start'} width="100%">
              <Skeleton width="100%" height="auto" isLoaded={!isLoading}>
                <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
                  <HStack spacing={5}>
                    <Text fontSize="4xl" lineHeight={1.2} as="b">
                      {name}
                    </Text>
                    <Badge fontSize="xl" bg={background} padding="4px 16px" borderRadius="6px">
                      {/* TODO: CURRENCY */}
                      {`${repScore} YOO`}
                    </Badge>
                  </HStack>
                  <HStack spacing={2}>
                    {isAdmin && (
                      <Button
                        variant="filled"
                        bg={orange}
                        _hover={{ bg: orangeHighlight }}
                        fontWeight={'bold'}
                      >
                        <Link href={`/community/${id}/pending`}>View Pending Quests</Link>
                      </Button>
                    )}
                    {isAdmin ? (
                      <Button
                        leftIcon={<Settings />}
                        bg={background}
                        _hover={{ bg: secondary }}
                        onClick={() => setIsEditCommunityFormOpen(true)}
                      >
                        Edit
                      </Button>
                    ) : (
                      <Button
                        leftIcon={<Text>+</Text>}
                        bg={orange}
                        _hover={{ bg: orangeHighlight }}
                        onClick={onHandleJoin}
                      >
                        Join
                      </Button>
                    )}
                  </HStack>
                </Flex>
              </Skeleton>

              <Skeleton width="auto" height="auto" isLoaded={!isLoading}>
                <HStack spacing={5}>
                  <Text>
                    by{' '}
                    <Link href={`/user/${owner.username}`}>
                      <Text as="b">{owner.name}</Text>
                    </Link>
                  </Text>
                  <HStack spacing={3}>
                    <IconButton
                      aria-label="website"
                      variant="outline"
                      borderRadius="9999px"
                      borderColor={foreground}
                    >
                      <Link href={`${website}`} target="_blank">
                        <WebsiteIcon />
                      </Link>
                    </IconButton>
                    {discordGuildId ? (
                      <IconButton
                        aria-label="discord"
                        variant="outline"
                        borderRadius="9999px"
                        borderColor={foreground}
                      >
                        <Link href={`${discordLink}`} target="_blank">
                          <DiscordIcon as="a" />
                        </Link>
                      </IconButton>
                    ) : (
                      isAdmin && (
                        <Flex justifyContent={'space-between'}>
                          <Button bg={discordPurple}>Connect Discord</Button>
                        </Flex>
                      )
                    )}
                  </HStack>
                </HStack>
              </Skeleton>

              <SkeletonText width="100%" noOfLines={3} isLoaded={!isLoading}>
                <Text>{description}</Text>
              </SkeletonText>

              <Skeleton width="100%" height="auto" isLoaded={!isLoading}>
                <HStack>
                  <HStack spacing={3}>
                    {memberList.length > 0 && (
                      <HStack spacing="-12px">
                        {memberList.slice(0, 3).map((item, index) => (
                          <AvatarPreview
                            key={index}
                            ringColor={orange}
                            img={item.image}
                            name={item.name}
                          />
                        ))}
                      </HStack>
                    )}

                    <Text>
                      Members <strong>{memberCount}</strong>
                    </Text>
                  </HStack>

                  <Text>&#x2022;</Text>
                  <Text>
                    Chain <strong>{chain}</strong>
                  </Text>
                  <Text>&#x2022;</Text>
                  <Text>
                    Category <strong>{category as string}</strong>
                  </Text>
                </HStack>
              </Skeleton>
            </VStack>
          </HStack>
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
        website={website as string}
        category={category}
        owner={owner}
      />
      {/* HARDCODED PROPS */}
      <BadgeClaimModal
        isOpen={isClaimDefaultBadgeOpen}
        onClose={() => setIsCreateDefaultBadgeOpen(false)}
        badgeId={1}
        badgeName={'y00ts Holder'}
        badgeLogo={
          'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreicndlrqersl63a7fpk6zzw73lsklj5bwsidk74n4solbcyz2g3viq.ipfs.nftstorage.link/'
        }
        badgePrice={0}
        badgeAddress={'0x3B02fF1e626Ed7a8fd6eC5299e2C54e1421B626B'}
      ></BadgeClaimModal>
    </>
  )
}

export default DaoOverview
