import type { ChangeEvent } from 'react'
import { useState } from 'react'

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
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

import UploadImage from '@components/shared/UploadImage'

import { PRICE_TOKEN_OPTIONS } from './BadgeForm.constants'
import * as sty from './BadgeForm.styles'
import type { BadgeFormProps } from './BadgeForm.types'

// TODO: checks for inputs
const BadgeForm = ({ isOpen, onClose, repUnit, quests }: BadgeFormProps) => {
  const [localImgUrl, setLocalImgUrl] = useState('')
  const [checkedQuestList, setCheckedQuestList] = useState<typeof quests>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [engagement, setEngagement] = useState(0)
  const [price, setPrice] = useState(0)
  const [priceUnit, setPriceUnit] = useState('ETH')

  const [checkedQuestError, setCheckedQuestError] = useState('')

  const handleQuestCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const tempCheckedList = [...checkedQuestList]
    if (e.target.checked) {
      if (tempCheckedList.length >= 5) {
        setCheckedQuestError('Maximum of 5 quests only.')
        e.target.checked = false
        return
      }
      tempCheckedList.push(JSON.parse(e.target.value))
    } else {
      tempCheckedList.splice(tempCheckedList.indexOf(JSON.parse(e.target.value)), 1)
    }

    setCheckedQuestError('')
    setCheckedQuestList(tempCheckedList)
  }

  const handleSubmit = () => {
    // TODO: submissionlogic
    if (checkedQuestList.length >= 5) return

    console.log({
      title,
      img: localImgUrl,
      checkedQuestList,
      description,
      engagement,
      price,
      priceUnit,
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={secondaryWeak}>
        <ModalHeader>Create New Badge</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex justifyContent={'space-between'} alignItems="center">
            <FormLabel>Badge ID</FormLabel>
            <Text as="b" color={primary} margin="8px 0 12px 0">
              MOCK_ID
            </Text>
          </Flex>
          <FormControl>
            <FormLabel>Badge logo</FormLabel>
            <UploadImage onFileLoad={(img: string) => setLocalImgUrl(img)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input
              variant="filled"
              placeholder="e.g. Hackathon guy"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Add interesting notes to describe this badge
            </FormHelperText>
            <Textarea
              variant="filled"
              placeholder="e.g. Hackathon is my life! This the badge to the guy who joined more than 2 hackathon and get prize more than 1"
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl mt={4} isInvalid={checkedQuestError.length > 0}>
            <FormLabel>Required quests</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Set the required quest conditions to claim the badge
            </FormHelperText>
            {/* TODO: implement proper functionality */}
            <VStack maxHeight="256px" overflowY="scroll" alignItems="flex-start">
              {quests.map((item, index) => (
                <Checkbox value={JSON.stringify(item)} key={index} onChange={handleQuestCheck}>
                  {item.name}
                </Checkbox>
              ))}
            </VStack>
            {checkedQuestError.length > 0 && (
              <FormErrorMessage>{checkedQuestError}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Claim conditions</FormLabel>
            <FormHelperText css={[sty.helperText]}>
              Set the required engagement conditions to claim a badge
            </FormHelperText>
            <InputGroup>
              <Input
                onChange={(e) => setEngagement(parseInt(e.target.value))}
                variant="filled"
                type="number"
                placeholder="1000"
              />
              <InputRightElement>
                <Text color={primary} as="b">
                  {repUnit}
                </Text>
              </InputRightElement>
            </InputGroup>
            <FormHelperText css={[sty.helperText]}>Set a price for a badge </FormHelperText>
            <InputGroup>
              <Input
                onChange={(e) => setPrice(parseInt(e.target.value))}
                variant="filled"
                type="number"
                placeholder="1000"
              />
              <InputRightAddon>
                <Select onChange={(e) => setPriceUnit(e.target.value)} variant={'unstyled'}>
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
              <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                <FormHelperText css={[sty.helperText]}>Listing Price</FormHelperText>
                <Text>22 MATIC</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                <FormHelperText css={[sty.helperText]}>Service Fee</FormHelperText>
                <Text>2.5 %</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                <FormHelperText css={[sty.helperText]}>Community Earnings</FormHelperText>
                <Text>3 %</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                <FormHelperText color={foreground} margin="8px 0 12px 0" as="b">
                  Potential Earnings
                </FormHelperText>
                <Text>20.79 MATIC</Text>
              </Flex>
            </VStack>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
            Create Badge
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default BadgeForm
