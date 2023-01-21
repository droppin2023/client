import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
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

import DiscordIcon from '@components/icons/DiscordIcon'
import { QuestType } from '@components/queries/common'

import { background2, discordPurple, primary, primaryHighlight, secondary } from '@constants/colors'
import * as globalSty from '@styles'

import type { QuestDetailModalProps } from './QuestDetailModal.types'

const QuestDetailModal = ({ isOpen, onClose, questType, questTitle }: QuestDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>{questTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={2} align="left" mt={4}>
            <Flex justifyContent="space-between">
              <Text color={secondary}>Schema Hash</Text>
              <Text as="b">0x3236206269afe3</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text color={secondary}>Reward Engagement</Text>
              <Text as="b">
                1000{' '}
                <Text as="span" color={primary}>
                  LPD
                </Text>
              </Text>
            </Flex>
          </VStack>

          <VStack align="left" mt={4}>
            <Text color={secondary}>Description</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi, distinctio
              nostrum blanditiis, laborum quibusdam veritatis cupiditate sed magnam iure optio
              consectetur? Cum corrupti unde laudantium sunt dolores quibusdam totam in quam
              asperiores voluptas ut velit dolore nostrum reiciendis omnis, harum molestias
              voluptatum esse quas necessitatibus! Hic labore blanditiis temporibus?
            </Text>
          </VStack>

          {questType === QuestType.form && (
            <FormControl mt={4}>
              <FormLabel color={secondary}>Submit Form</FormLabel>
              <Textarea
                variant="filled"
                placeholder="Write about your completion for this request here"
              />
            </FormControl>
          )}

          {questType === QuestType.discord && (
            <FormControl mt={4}>
              <FormLabel>Connect Discord</FormLabel>
              <FormHelperText css={[globalSty.helperText]}>
                To complete this quest, you have to connect discord account
              </FormHelperText>
              <Button bgColor={discordPurple}>
                <DiscordIcon />
                <Text ml={4}>Connect Discord</Text>
              </Button>
            </FormControl>
          )}
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent={'space-between'} gap="12px">
            <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }} flex="1">
              Continue
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default QuestDetailModal
