import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import Done from '@components/icons/Done'
import QuestBadge from '@components/shared/QuestBadge'
import { QRCode } from 'react-qr-svg'
import { background2, primary, primaryHighlight } from '@constants/colors'
import { SERVER_URL } from '@constants/serverConfig'
import { useUserContext } from '@context/UserContext'
import useFetchClaimedBadge from '@queries/useFetchClaimedBadge'
import usePostClaimBadge from '@queries/usePostClaimBadge'
import axios from 'axios'
import Image from 'next/image'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import barcodePlaceholder from './assets/barcode-placeholder.png'
import { getTwitterTweetContent, qrProofRequestJson } from './ClaimModal.helpers'
import { ClaimModalPhase, ClaimModalProps } from './ClaimModal.types'
import useCheckAuth from '@queries/useCheckAuth'

const ClaimModal = ({
  isOpen,
  onClose,
  badgeId,
  badgeName,
  badgeLogo,
  badgeAddress,
  badgePrice,
  engagementScore,
  qrCode,
  sessionID,
  offerId,
  schema,
}: ClaimModalProps) => {
  const { user } = useUserContext()

  const [phase, setPhase] = useState<ClaimModalPhase>(ClaimModalPhase.PRE_IDENTIFY)
  const urlRef = useRef<HTMLInputElement>(null)
  const { claimBadge, isLoading, error } = usePostClaimBadge()

  const [onchainBadge, setOnchainBadge] = useState()
  const [claimQR, setClaimQR] = useState()
  const [verifyQR, setVerifyQR] = useState({})
  const [isClaimable, setIsClaimable] = useState(false)
  const [isAuthDone, setIsAuthDone] = useState(false)
  const [msg, setMsg] = useState('Click to check')
  const { checkAuth } = useCheckAuth()

  // TODO:  DUMMY HANDLER, TEMPORARY SOLUTION BEFORE POLYGON ID
  // const handleScanned = () => {
  //   setPhase(ClaimModalPhase.POST_IDENTIFY)
  // }

  // const handleClaim = async () => {
  //   const params = {
  //     badgeId,
  //   }

  //   const res = await claimBadge(params)
  //   setPhase(ClaimModalPhase.CLAIMED)
  //   // TODO  : GET CLAIMED INFO
  //   // const res2 = await
  // }

  const handleCheck = async () => {
    const res = await checkAuth(sessionID, offerId)
    console.log(res)
    if (res?.status == 'pending' || res?.status == 401) {
      setMsg('Pending')
    } else if (res?.status == 'done') {
      setMsg('Scan, Get Claim')
      setClaimQR(res.qrcode)
      setIsAuthDone(true)
    }
  }

  const handleCopy = () => {
    if (urlRef?.current?.value || null)
      navigator.clipboard.writeText(urlRef?.current?.value as string)
  }

  const handleClaimableTrue = () => {
    setIsClaimable(true)
    const params = {
      engagementScore,
      schemaHash: schema?.schemaHash,
      schemaName: schema?.schemaType,
      schemaId: schema?.schemaId,
    }
    console.log(params, 'fking params')
    const res = qrProofRequestJson(params)
    console.log(res, 'fking QR')
    setVerifyQR(res)
  }

  // useEffect(() => {
  //   const params = {
  //     engagementScore,
  //     schemaHash: schema?.schemaHash,
  //     schemaName: schema?.schemaType,
  //     schemaId: schema?.schemaId,
  //   }
  //   console.log(params, 'fking params')
  //   const res = qrProofRequestJson(params)
  //   console.log(res, 'fking QR')
  //   setVerifyQR(res)
  // }, [isClaimable])

  const renderPolygonIdScan = () => (
    <>
      <ModalBody>
        <VStack spacing={5}>
          <QuestBadge img={badgeLogo} name={badgeName} isLocked={false} />

          <Text fontSize="lg" textAlign="center">
            You can claim your badge now.
          </Text>
          <Text as="b" fontSize="l" textAlign="center">
            Scan it, Get Badge Claim to your Polygon ID Identity
          </Text>
          {/* TODO: replace with polygon ID barcode */}
          {isClaimable ? (
            <QRCode level="Q" style={{ width: 256 }} value={JSON.stringify(verifyQR)} />
          ) : isAuthDone ? (
            <QRCode level="Q" style={{ width: 256 }} value={JSON.stringify(claimQR)} />
          ) : (
            <Image
              src={qrCode}
              alt="Polygon ID Barcode"
              width={200}
              height={200}
              // onClick={handleScanned}
            />
          )}

          {/* <VStack spacing={1}>
              <Text fontSize="lg" textAlign="center" color={primary}>
                Price
              </Text>
              <Text as="b" fontSize="lg" textAlign="center">
                {`${badgePrice.number} ${badgePrice.unit}`}
              </Text>
            </VStack> */}
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Flex width="100%" justifyContent="center">
          <VStack>
            <Flex width="100%" justifyContent="flex-start">
              <VStack align="left" width="100%" spacing={5}>
                {/* <FormControl>
                  <FormLabel>Any messages you want to share?</FormLabel>
                  <Input variant="filled" placeholder="Leave your message here and post it" />
                </FormControl> */}

                {isClaimable ? (
                  <VStack>
                    <Text as="b" fontSize="lg" textAlign="center" margin={3}>
                      {/* TODO: HARDCODED DATA */}
                      {`${badgePrice} YOO`}
                    </Text>
                    <Button
                      size="lg"
                      bg={primary}
                      _hover={{ bg: primaryHighlight }}
                      // onClick={handleClaim}
                    >
                      <Text fontSize="lg" textAlign="center">
                        Claim Badge
                      </Text>
                    </Button>
                  </VStack>
                ) : isAuthDone ? (
                  <Button
                    size="lg"
                    bg={primary}
                    _hover={{ bg: primaryHighlight }}
                    onClick={handleClaimableTrue}
                  >
                    <Text fontSize="lg" textAlign="center">
                      Click after you get your claim
                    </Text>
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    bg={primary}
                    _hover={{ bg: primaryHighlight }}
                    onClick={handleCheck}
                  >
                    <Text fontSize="lg" textAlign="center">
                      {msg}
                    </Text>
                  </Button>
                )}
              </VStack>
            </Flex>
          </VStack>
        </Flex>
      </ModalFooter>
    </>
  )

  // const renderClaimConfirmation = () => (
  //   <>
  //     <ModalBody>
  //       <VStack spacing={5}>
  //         <QuestBadge img={badgeLogo} name={badgeName} isLocked={false} />
  //         <VStack spacing={1}>
  //           <Done width="48px" height="48px" />
  //           <Text as="b" fontSize="lg" textAlign="center">
  //             All good !
  //           </Text>
  //           <Text fontSize="lg" textAlign="center">
  //             You can claim your badge now.
  //           </Text>
  //         </VStack>
  //         <VStack spacing={1}>
  //           <Text fontSize="lg" textAlign="center" color={primary}>
  //             Price
  //           </Text>
  //           <Text as="b" fontSize="lg" textAlign="center">
  //             {`${badgePrice.number} ${badgePrice.unit}`}
  //           </Text>
  //         </VStack>
  //       </VStack>
  //     </ModalBody>
  //     <ModalFooter>
  //       <Flex width="100%" justifyContent="flex-start">
  //         <VStack align="left" width="100%" spacing={5}>
  //           <FormControl>
  //             <FormLabel>Any messages you want to share?</FormLabel>
  //             <Input variant="filled" placeholder="Leave your message here and post it" />
  //           </FormControl>
  //           <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }} onClick={handleClaim}>
  //             Claim Badge
  //           </Button>
  //         </VStack>
  //       </Flex>
  //     </ModalFooter>
  //   </>
  // )

  const renderClaimCompleted = () => (
    <>
      <ModalBody>
        <VStack spacing={5}>
          <QuestBadge img={badgeLogo} name={badgeName} isLocked={false} />
          <VStack spacing={1}>
            <Done width="48px" height="48px" />
            <Text as="b" fontSize="lg" textAlign="center">
              Badge Claimed!
            </Text>
          </VStack>

          <VStack spacing={3}>
            {/* <Flex justifyContent={'center'} alignItems="center" gap={3}>
              <Text textAlign="center" color={primary}>
                share
              </Text>
              <Input
                variant="filled"
                readOnly
                value="https://droppin.io/drop_dao/in..."
                ref={urlRef}
              />
              <Button variant="ghost" color={orange} onClick={handleCopy}>
                copy
              </Button>
            </Flex> */}
            <NextLink
              href={`https://twitter.com/intent/tweet?text=${getTwitterTweetContent(
                badgeName,
              )}&hashtags=droppin,droppinprotocol`}
            >
              <Button as="a" colorScheme="twitter">
                Share on Twitter
              </Button>
            </NextLink>
          </VStack>
        </VStack>
      </ModalBody>
      <ModalFooter>
        {/* <VStack
          width="100%"
          justifyContent="flex-start"
          bg={secondaryWeak}
          padding="16px"
          borderRadius="16px"
        >
          <Flex width="100%" justifyContent={'space-between'} alignItems="center">
            <Text>Address</Text>
            <Text as="b" color={primary}>
              0x872020202472
            </Text>
          </Flex>
          <Flex width="100%" justifyContent={'space-between'} alignItems="center">
            <Text>Token ID</Text>
            <Text as="b" color={primary}>
              647
            </Text>
          </Flex>
          <Flex width="100%" justifyContent={'space-between'} alignItems="center">
            <Text>Token Standard</Text>
            <Text as="b" color={primary}>
              TS-212
            </Text>
          </Flex>
          <Flex width="100%" justifyContent={'space-between'} alignItems="center">
            <Text>Chain</Text>
            <Text as="b" color={primary}>
              Polygon
            </Text>
          </Flex>
        </VStack> */}
      </ModalFooter>
    </>
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Badge Claim</ModalHeader>
        <ModalCloseButton />

        {(() => {
          switch (phase) {
            case ClaimModalPhase.PRE_IDENTIFY:
              return renderPolygonIdScan()
            // case ClaimModalPhase.POST_IDENTIFY:
            //   return renderClaimConfirmation()
            case ClaimModalPhase.CLAIMED:
              return renderClaimCompleted()
          }
        })()}
      </ModalContent>
    </Modal>
  )
}

export default ClaimModal
function useFetchBadgeDetail(arg0: { badgeId: number }): { fetchClaimedBadge: any } {
  throw new Error('Function not implemented.')
}
