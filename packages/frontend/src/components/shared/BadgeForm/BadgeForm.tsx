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

import { background2, foreground, primary, primaryHighlight } from '@constants/colors'

import UploadImage from '@components/shared/UploadImage'

import { PRICE_TOKEN_OPTIONS } from './BadgeForm.constants'
import * as sty from './BadgeForm.styles'
import type { BadgeFormProps } from './BadgeForm.types'
import { parseEther } from 'ethers/lib/utils.js'
import { ethers } from 'ethers'
import usePostCreateBadge from '@components/queries/usePostCreateBadge'

// TODO: checks for inputs
const BadgeForm = ({
  isOpen,
  onClose,
  repUnit,
  questsDiscord,
  questsSubmitForm,
  groupId,
}: BadgeFormProps) => {
  const [localImgUrl, setLocalImgUrl] = useState('')
  const [checkedQuestList, setCheckedQuestList] = useState<typeof quests>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [engagement, setEngagement] = useState(0)
  const [price, setPrice] = useState(0)
  const [symbol, setSymbol] = useState('')
  const [priceUnit, setPriceUnit] = useState('ETH')
  const { createBadge, isLoading, setIsLoading, error } = usePostCreateBadge()
  const [checkedQuestError, setCheckedQuestError] = useState('')
  //TODO: handleQuestCheck is not properly working when after get CheckedQuestError. Have to Fix it
  const handleQuestCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const tempCheckedList = [...checkedQuestList]
    if (e.target.checked) {
      if (tempCheckedList.length >= 3) {
        setCheckedQuestError('Maximum of 3 quests only.')
        e.target.checked = false
        return
      }
      tempCheckedList.push(JSON.parse(e.target.value))
      setEngagement(engagement + JSON.parse(e.target.value).engageScore.number)
    } else {
      tempCheckedList.splice(tempCheckedList.indexOf(JSON.parse(e.target.value)), 1)
      setEngagement(engagement - JSON.parse(e.target.value).engageScore.number)
    }

    setCheckedQuestError('')
    setCheckedQuestList(tempCheckedList)
  }

  const handleSubmit = async () => {
    // TODO: check submission condition and error modal
    if (checkedQuestList.length >= 4 || title == '' || symbol == '') return
    const params = {
      contract: {
        requiredQuests: checkedQuestList.map((quest: { id: number }) => quest.id),
        engagePointsThreshold: engagement,
        badgePrice: parseEther(price.toString()),
        name: title,
        NFT: ethers.constants.AddressZero,
        groupId: groupId,
        symbol: symbol,
        URI: localImgUrl,
      },
      description: description,
      name: title,
    }
    const res = await createBadge(params)
    // TODO : Add loading modal and error modal using this data
    console.log(res, error, isLoading)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Create New Badge</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex justifyContent={'space-between'} alignItems="center">
            <FormLabel>Community ID</FormLabel>
            <Text as="b" color={primary} margin="8px 0 12px 0">
              {groupId}
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
            <FormLabel>Symbol</FormLabel>
            <Input
              variant="filled"
              placeholder="e.g. HG"
              onChange={(e) => setSymbol(e.target.value)}
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

            <VStack maxHeight="256px" overflowY="scroll" alignItems="flex-start">
              {[...questsDiscord.questList, ...questsSubmitForm.questList].map((item, index) => (
                <Checkbox value={JSON.stringify(item)} key={index} onChange={handleQuestCheck}>
                  <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                    <FormHelperText color={foreground} margin="8px 0 12px 0">
                      <Text as="b">{item.name}</Text>
                      <Text>
                        {item.engageScore.number} {item.engageScore.unit}
                      </Text>
                    </FormHelperText>
                  </Flex>
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
              Required engagement conditions to claim a badge
            </FormHelperText>
            <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
              <Text>{engagement}</Text>
              <Text color={primary} as="b">
                {repUnit}
              </Text>
            </Flex>

            {/* <InputGroup>
              <Input
                onChange={(e) => setEngagement(parseInt(e.target.value))}
                variant="filled"
                type="number"
                // placeholder={checkedQuestList.map((quest)=>return )}
              />
              <InputRightElement>
                <Text color={primary} as="b">
                  {repUnit}
                </Text>
              </InputRightElement>
            </InputGroup> */}
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
                <Text>{price} ETH</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                <FormHelperText css={[sty.helperText]}>Service Fee</FormHelperText>
                <Text>2.5 %</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                <FormHelperText color={foreground} margin="8px 0 12px 0" as="b">
                  Potential Earnings
                </FormHelperText>
                <Text>{price * 0.75} ETH</Text>
              </Flex>
            </VStack>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
            Create Badge
          </Button>
        </ModalFooter>
        {/* {isLoading && (
          <DroppinModal isOpen={isLoading} onClose={() => setIsLoading(false)} modatMessage={} modalStatus/>
        )} */}
      </ModalContent>
    </Modal>
  )
}

export default BadgeForm
