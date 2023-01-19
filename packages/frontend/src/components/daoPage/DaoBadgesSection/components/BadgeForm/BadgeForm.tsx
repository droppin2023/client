import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'

import { foreground, primary, primaryHighlight, secondaryWeak } from '@constants/colors'

import { PRICE_TOKEN_OPTIONS } from './BadgeForm.constants'
import * as sty from './BadgeForm.styles'
import type { BadgeFormProps } from './BadgeForm.types'

const BadgeForm = ({ isOpen, onClose, repUnit }: BadgeFormProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={secondaryWeak}>
        <ModalHeader>Create New Badge</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {/* TODO: make a file upload component */}
          <FormControl>
            <FormLabel>Badge logo</FormLabel>
            <Input type="file" placeholder="First name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input variant="filled" placeholder="e.g. Hackathon guy" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Add interesting notes to describe this badge
            </FormHelperText>
            <Textarea
              variant="filled"
              placeholder="e.g. Hackathon is my life! This the badge to the guy who joined more than 2 hackathon and get prize more than 1"
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Claim condition</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Set the required quest conditions to claim the badge
            </FormHelperText>
            {/* TODO: implement proper functionality */}
            <Textarea placeholder="e.g. Hackathon is my life! This the badge to the guy who joined more than 2 hackathon and get prize more than 1" />
            <FormHelperText css={[sty.helperText]}>
              Set the required engagement conditions to claim a badge
            </FormHelperText>
            <InputGroup>
              <Input variant="filled" type="number" placeholder="1000" />
              <InputRightElement>
                <Text color={primary} as="b">
                  {repUnit}
                </Text>
              </InputRightElement>
            </InputGroup>
            <FormHelperText css={[sty.helperText]}>Set a price for a badge </FormHelperText>
            <InputGroup>
              <Input variant="filled" type="number" placeholder="1000" />
              <InputRightAddon>
                <Select variant={'unstyled'}>
                  {PRICE_TOKEN_OPTIONS.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </Select>
              </InputRightAddon>
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Summary</FormLabel>
            <VStack alignItems={'flex-start'}>
              <Flex justifyContent={'space-between'} width="100%">
                <FormHelperText css={[sty.helperText]}>Listing Price</FormHelperText>
                <Text>22 MATIC</Text>
              </Flex>
              <Flex justifyContent={'space-between'} width="100%">
                <FormHelperText css={[sty.helperText]}>Service Fee</FormHelperText>
                <Text>2.5 %</Text>
              </Flex>
              <Flex justifyContent={'space-between'} width="100%">
                <FormHelperText css={[sty.helperText]}>Community Earnings</FormHelperText>
                <Text>3 %</Text>
              </Flex>
              <Flex justifyContent={'space-between'} width="100%">
                <FormHelperText as="b" color={foreground}>
                  Potential Earnings
                </FormHelperText>
                <Text>20.79 MATIC</Text>
              </Flex>
            </VStack>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
            Create Badge
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default BadgeForm
