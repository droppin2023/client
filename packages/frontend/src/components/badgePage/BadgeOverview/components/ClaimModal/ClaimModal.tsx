import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
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
import { background2, orange, primary, primaryHighlight, secondaryWeak } from '@constants/colors'
import Image from 'next/image'
import { ClaimModalProps } from './ClaimModal.types'

const ClaimModal = ({
  isOpen,
  onClose,
  badgeName,
  badgeLogo,
  badgePrice,
  user,
}: ClaimModalProps) => {
  const renderPolygonIdScan = () => (
    <>
      <ModalBody>
        <VStack spacing={5}>
          <QuestBadge img={badgeLogo} name={badgeName} isLocked={false} />
          <Text as="b" fontSize="xl" textAlign="center">
            Scan your Polygon ID Wallet to unlock badge!
          </Text>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Flex width="100%" justifyContent="center">
          {/* TODO: replace with polygon ID barcode */}
          <Image
            src="https://picsum.photos/200"
            alt="Polygon ID Barcode"
            width={200}
            height={200}
          />
        </Flex>
      </ModalFooter>
    </>
  )

  const renderClaimConfirmation = () => (
    <>
      <ModalBody>
        <VStack spacing={5}>
          <QuestBadge img={badgeLogo} name={badgeName} isLocked={false} />
          <VStack spacing={1}>
            <Done width="48px" height="48px" />
            <Text as="b" fontSize="lg" textAlign="center">
              All good !
            </Text>
            <Text fontSize="lg" textAlign="center">
              You can claim your badge now.
            </Text>
          </VStack>
          <VStack spacing={1}>
            <Text fontSize="lg" textAlign="center" color={primary}>
              Price
            </Text>
            <Text as="b" fontSize="lg" textAlign="center">
              {`${badgePrice.number} ${badgePrice.unit}`}
            </Text>
          </VStack>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Flex width="100%" justifyContent="flex-start">
          <VStack align="left" width="100%" spacing={5}>
            <FormControl>
              <FormLabel>Any messages you want to share?</FormLabel>
              <Input variant="filled" placeholder="Leave your message here and post it" />
            </FormControl>
            <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
              Claim Badge
            </Button>
          </VStack>
        </Flex>
      </ModalFooter>
    </>
  )

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
            <Flex justifyContent={'center'} alignItems="center" gap={3}>
              <Text textAlign="center" color={primary}>
                share
              </Text>
              <Input variant="filled" readOnly value="https://droppin.io/drop_dao/in..." />
              <Button variant="ghost" color={orange}>
                copy
              </Button>
            </Flex>
            <Button colorScheme="twitter">Share on Twitter</Button>
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
        {/* {renderPolygonIdScan()} */}
        {/* {renderClaimConfirmation()} */}
        {renderClaimCompleted()}
      </ModalContent>
    </Modal>
  )
}

export default ClaimModal
