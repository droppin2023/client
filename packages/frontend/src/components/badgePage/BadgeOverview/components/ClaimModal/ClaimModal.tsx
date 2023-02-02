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
import useFetchClaimedBadge from '@components/queries/useFetchClaimedBadge'
import usePostClaimBadge from '@components/queries/usePostClaimBadge'
import QuestBadge from '@components/shared/QuestBadge'
import { background2, primary, primaryHighlight, secondaryWeak } from '@constants/colors'
import { useUserContext } from '@context/UserContext'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRef, useState } from 'react'
import { getTwitterTweetContent } from './ClaimModal.helpers'
import { ClaimModalPhase, ClaimModalProps } from './ClaimModal.types'

const ClaimModal = ({
  isOpen,
  onClose,
  badgeId,
  badgeName,
  badgeLogo,
  badgeAddress,
  badgePrice,
}: ClaimModalProps) => {
  const { user } = useUserContext()

  const [phase, setPhase] = useState<ClaimModalPhase>(ClaimModalPhase.PRE_IDENTIFY)
  const urlRef = useRef<HTMLInputElement>(null)
  const { claimBadge, isLoading, error } = usePostClaimBadge()
  const [onchainBadge, setOnchainBadge] = useState()

  // TODO:  DUMMY HANDLER, TEMPORARY SOLUTION BEFORE POLYGON ID
  // const handleScanned = () => {
  //   setPhase(ClaimModalPhase.POST_IDENTIFY)
  // }
  const { fetchClaimedBadge } = useFetchClaimedBadge({
    badgeId,
    badgeAddress: badgeAddress,
    userAddress: user?.address as string,
  })

  const handleClaim = async () => {
    const params = {
      badgeId,
    }
    const res = await claimBadge(params)
    setPhase(ClaimModalPhase.CLAIMED)
    // TODO  : GET CLAIMED INFO
    // const res2 = await
  }

  const handleCopy = () => {
    if (urlRef?.current?.value || null)
      navigator.clipboard.writeText(urlRef?.current?.value as string)
  }

  const renderPolygonIdScan = () => (
    <>
      <ModalBody>
        <VStack spacing={5}>
          <QuestBadge img={badgeLogo} name={badgeName} isLocked={false} />

          <Text fontSize="lg" textAlign="center">
            You can claim your badge now.
          </Text>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Flex width="100%" justifyContent="center">
          <VStack>
            <Text as="b" fontSize="l" textAlign="center">
              Scan it, Get Badge Claim to your Polygon ID Identity
            </Text>
            {/* TODO: replace with polygon ID barcode */}
            <Image
              src="https://picsum.photos/200"
              alt="Polygon ID Barcode"
              width={200}
              height={200}
              // onClick={handleScanned}
            />
            {/* <VStack spacing={1}>
              <Text fontSize="lg" textAlign="center" color={primary}>
                Price
              </Text>
              <Text as="b" fontSize="lg" textAlign="center">
                {`${badgePrice.number} ${badgePrice.unit}`}
              </Text>
            </VStack> */}
            <Flex width="100%" justifyContent="flex-start">
              <VStack align="left" width="100%" spacing={5}>
                {/* <FormControl>
                  <FormLabel>Any messages you want to share?</FormLabel>
                  <Input variant="filled" placeholder="Leave your message here and post it" />
                </FormControl> */}
                <Button
                  size="lg"
                  bg={primary}
                  _hover={{ bg: primaryHighlight }}
                  onClick={handleClaim}
                >
                  <Text as="b" fontSize="lg" textAlign="center" margin={3}>
                    {`${badgePrice.number} ${badgePrice.unit}`}
                  </Text>
                  <Text fontSize="lg" textAlign="center">
                    Claim Badge
                  </Text>
                </Button>
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
        <VStack
          width="100%"
          justifyContent="flex-start"
          bg={secondaryWeak}
          padding="16px"
          borderRadius="16px"
        >
          {/* TODO: integrate real data */}
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
        </VStack>
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
