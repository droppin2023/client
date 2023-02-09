import { useState } from 'react'

import Image from 'next/image'

import { Button, Flex, HStack, Skeleton, SkeletonText, Text, VStack } from '@chakra-ui/react'

import { orange, orangeHighlight } from '@constants/colors'

import bannerOrnament from './assets/banner-ornament.svg'

import { useUserContext } from '@context/UserContext'
import * as sty from './BadgeOverview.styles'
import type { BadgeOverviewProps } from './BadgeOverview.types'
import ClaimModal from './components/ClaimModal'
import axios from 'axios'
import { SERVER_URL } from '@constants/serverConfig'
import useCreateQRcode from '@queries/useCreateQRcode'
import localStorageUtils from '@helpers/localStorageUtils'

const BadgeOverview = ({
  id,
  name = 'NewBie Badge',
  symbol,
  logo,
  communityName,
  description,
  badgeAddress,
  badgePrice,
  isLoading,
  offerId,
  engagementScore,
  schema,
}: BadgeOverviewProps) => {
  const { isLoggedIn, user } = useUserContext()
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false)
  const [qrCode, setQrCode] = useState()
  const [sessionID, setSessionID] = useState()
  const { createQRcode } = useCreateQRcode()
  const onHandleClaim = async () => {
    // TODO : Need API to check if user fullfilled every conditions for Badge
    const isClaimAble = true
    console.log(isClaimAble)
    const res = await axios.get(`${SERVER_URL}/check-badge/${user?.username}/${id}`)
    const claimInfo = res.data
    console.log('CLAIM INFO', claimInfo)

    // TODO: POC
    if (claimInfo.claimable) {
      const { token } = localStorageUtils.read('polygon_id_user')
      console.log(schema, 'fkind schema checkgaewgwaegewagawgeegewga')
      const params = {
        token,
        offerId,
      }
      const { srcValue, sessionID } = await createQRcode(params)
      console.log(srcValue)
      setQrCode(srcValue)
      setIsClaimModalOpen(true)
      setSessionID(sessionID)
    }
  }

  return (
    <>
      <Flex
        width="100vw"
        position="relative"
        justifyContent={'center'}
        alignItems="center"
        bgImage={bannerOrnament.src}
        padding="88px 0"
        borderRadius="0 0 48px 48px"
      >
        <Flex alignItems="flex-start" gap="16px" width="80%" justifyContent="flex-start">
          {isLoading ? (
            <Skeleton css={[sty.badgeImage]} width="300px" height="300px" />
          ) : (
            <Image src={logo} alt={name} width={300} height={300} css={[sty.badgeImage]} />
          )}

          <VStack alignSelf="start" marginLeft={10} width="100%">
            <Skeleton height="40px" width="100%" isLoaded={!isLoading}>
              <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
                <HStack spacing={5}>
                  <Text fontSize="4xl" lineHeight={1.2} as="b">
                    {name}
                  </Text>
                  <Text fontSize="4xl" lineHeight={1.2}>
                    {symbol}
                  </Text>
                </HStack>
              </Flex>
            </Skeleton>

            <Skeleton height="40px" width="100%" isLoaded={!isLoading}>
              <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
                <HStack spacing={6}>
                  <Text>
                    by <Text as="b">{communityName}</Text>
                  </Text>
                </HStack>
              </Flex>
            </Skeleton>
            <SkeletonText
              noOfLines={3}
              spacing="4"
              skeletonHeight="2"
              width="100%"
              height="80px"
              mt={4}
              isLoaded={!isLoading}
            >
              <Flex alignItems={'center'} justifyContent="space-between" width="100%" flex={1}>
                <Text>{description}</Text>
              </Flex>
            </SkeletonText>
            <Skeleton width="100%" height="40px" isLoaded={!isLoading}>
              <Flex alignItems={'center'} justifyContent="left" width="100%" flex={1}>
                <HStack spacing={6}>
                  <Text as="b">
                    {badgePrice} {symbol}
                  </Text>
                  {isLoggedIn && (
                    <Button
                      onClick={onHandleClaim}
                      leftIcon={<Text>+</Text>}
                      bg={orange}
                      _hover={{ bg: orangeHighlight }}
                    >
                      Claim Now
                    </Button>
                  )}
                </HStack>
              </Flex>
            </Skeleton>
          </VStack>
        </Flex>
      </Flex>
      <ClaimModal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
        badgeId={id}
        badgeName={name}
        badgeLogo={logo}
        badgeAddress={badgeAddress}
        badgePrice={badgePrice}
        qrCode={qrCode}
        sessionID={sessionID}
        offerId={offerId}
        engagementScore={engagementScore}
        schema={schema}
      />
    </>
  )
}

export default BadgeOverview
