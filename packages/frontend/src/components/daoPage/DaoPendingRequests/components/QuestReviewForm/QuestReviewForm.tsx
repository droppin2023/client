import Image from 'next/image'

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import * as sty from './QuestReviewForm.styles'
import type { QuestReviewFormProps } from './QuestReviewForm.types'

import {
  background2,
  orange,
  primary,
  primaryHighlight,
  secondary,
  secondaryWeak,
} from '@constants/colors'
import mockAvatar1 from '@mockData/assets/mock-avatar-1.png'

const QuestReviewForm = ({ isOpen, onClose }: QuestReviewFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Review Quest</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex
            bg={secondaryWeak}
            padding="8px"
            borderRadius="12px"
            justifyContent={'space-between'}
          >
            <HStack>
              <Image
                src={mockAvatar1}
                alt="Profile picture"
                css={[sty.userImg]}
                width={32}
                height={32}
              />
              <Text>Carlos Ramos</Text>
            </HStack>
            <Button>View Profile</Button>
          </Flex>

          <VStack spacing={2} align="left" mt={4}>
            <VStack align="left">
              <Text color={secondary}>Schema Hash</Text>
              <Text as="b">0x3236206269afe3</Text>
            </VStack>

            <Flex justifyContent={'space-between'}>
              <VStack spacing={1} align="left">
                <Text color={secondary}>Quest Name</Text>
                <Text as="b">Join Hackathon</Text>
              </VStack>
              <VStack spacing={1} align="left">
                <Text color={secondary}>Quest Reward</Text>
                <Text as="b" color={orange}>
                  100 LEP
                </Text>
              </VStack>
            </Flex>
          </VStack>

          <FormControl mt={4}>
            <FormLabel color={secondary} as="span">
              Request Details
            </FormLabel>
            <Textarea
              variant="filled"
              disabled
              value="Hi, this is Carlos. I joined Polygon pit hackathon."
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel color={secondary}>Leave a Feedback</FormLabel>
            <Textarea variant="filled" placeholder="Leave your feedback to this request here" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'} gap="12px">
            <Button size="lg" colorScheme="red" flex="1">
              Reject
            </Button>
            <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }} flex="1">
              Accept
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default QuestReviewForm
