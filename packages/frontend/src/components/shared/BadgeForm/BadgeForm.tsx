import { ChangeEvent, useEffect, useState } from 'react'

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
  useToast,
  VStack,
} from '@chakra-ui/react'

import { background2, foreground, primary, primaryHighlight } from '@constants/colors'

import DroppinModal from '@components/shared/DroppinModal'
import UploadImage from '@components/shared/UploadImage'

import usePostCreateBadge from '@queries/usePostCreateBadge'
import { ethers } from 'ethers'
import { parseEther } from 'ethers/lib/utils.js'

import { Quest } from '@queries/common'
import { useRouter } from 'next/router'
import { PRICE_TOKEN_OPTIONS } from './BadgeForm.constants'
import * as sty from './BadgeForm.styles'
import type { BadgeFormProps } from './BadgeForm.types'
import useCreateSchema from '@queries/useCreateSchema'

// TODO: checks for inputs
const BadgeForm = ({
  isOpen,
  onClose,
  repUnit,
  questsDiscord,
  questsSubmitForm,
  groupId,
  issuerId,
  token,
  email,
  password,
}: BadgeFormProps) => {
  const [localImgUrl, setLocalImgUrl] = useState('')
  const [checkedQuestList, setCheckedQuestList] = useState<Quest[]>([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [engagement, setEngagement] = useState(0)
  const [price, setPrice] = useState(0)
  const [symbol, setSymbol] = useState('')
  const [priceUnit, setPriceUnit] = useState('ETH')
  const [checkedQuestError, setCheckedQuestError] = useState('')

  const toast = useToast()
  const router = useRouter()
  const { createBadge, isLoading, setIsLoading, error } = usePostCreateBadge()
  const { createSchema } = useCreateSchema()

  //TODO: handleQuestCheck is not properly working when after get CheckedQuestError. Have to Fix it
  const handleQuestCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let tempCheckedList = [...checkedQuestList]
    const focusedQuest: Quest = JSON.parse(e.target.value)

    if (e.target.checked) {
      if (tempCheckedList.length >= 3) {
        setCheckedQuestError('Maximum of 3 quests only.')
        e.target.checked = false
        return
      }
      tempCheckedList.push(focusedQuest)
      setEngagement(engagement + focusedQuest.engagePoints)
    } else {
      tempCheckedList = tempCheckedList.filter((item) => item.id !== focusedQuest.id)
      setEngagement(engagement - focusedQuest.engagePoints)
    }

    setCheckedQuestError('')
    setCheckedQuestList(tempCheckedList)
  }
  function hexToBytes(hex: string) {
    // eslint-disable-next-line no-var
    for (var bytes = [], c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substr(c, 2), 16))
    return bytes
  }

  function fromLittleEndian(bytes: any[]) {
    const n256 = BigInt(256)
    let result = BigInt(0)
    let base = BigInt(1)
    bytes.forEach((byte) => {
      result += base * BigInt(byte)
      base = base * n256
    })
    return result
  }

  // reset everything when we close the modal
  const handleClose = () => {
    setLocalImgUrl('')
    setCheckedQuestList([])
    setTitle('')
    setDescription('')
    setEngagement(0)
    setPrice(0)
    setSymbol('')
    setPriceUnit('ETH')
    setCheckedQuestError('')

    onClose()
  }

  const handleSubmit = async () => {
    // TODO: check submission condition and error modal
    if (checkedQuestList.length >= 4 || title == '' || symbol == '') return

    // pad checked quests array if not multiple of 3
    const requiredQuests = checkedQuestList.map((quest) => quest.id)
    while (requiredQuests.length < 3) {
      requiredQuests.push(0)
    }

    const params_polygonID = {
      //should get from server
      issuerID: issuerId,
      schemaBody: {
        schema: title,
        technicalName: title,
        mandatoryExpiration: false,
        attributes: [
          {
            name: 'engagementScore',
            technicalName: 'engagementscore',
            type: 'number',
            description: 'engagementScoreThreshold',
          },
        ],
      },
      offerBody: {
        attributes: [
          {
            attributeKey: 'engagementScore',
            attributeValue: engagement,
          },
        ],
      },
      token,
      email,
      password,
    }
    const res_schema = await createSchema(params_polygonID)
    console.log(res_schema?.schemaHash, res_schema?.offerID, 'taweighewaighaewughewauigaiuweguw')
    const schemaEnd = fromLittleEndian(hexToBytes(res_schema?.schemaHash))

    const params = {
      contract: {
        schemaHash: ethers.BigNumber.from(schemaEnd),
        requiredQuests,
        engagePointsThreshold: engagement,
        badgePrice: parseEther(price.toString()),
        name: title,
        NFT: ethers.constants.AddressZero,
        groupId: Number(groupId),
        symbol: symbol,
        URI: localImgUrl,
      },
      schemaHash: res_schema?.schemaHash,
      schemaType: title.replace(' ', ''),
      schemaId: res_schema?.schemaID,
      description: description,
      name: title,
      symbol,
      offerId: res_schema?.offerID,
    }
    const res = await createBadge(params)

    // TODO : Add loading modal and error modal using this data
    console.log('CLAIM BADGE CONTRACT', res, error, isLoading)

    router.reload()
  }

  // this useEffect helps with the toaster rendering
  useEffect(() => {
    if (isOpen && !isLoading) {
      toast({
        title: error ? 'An error occured' : 'Successfully create badge!',
        description: error ? 'Creation not successful !' : "We've created your badge for you.",
        status: error ? 'error' : 'success',
        duration: 5000,
        isClosable: true,
      })

      if (!error) onClose()
    }
  }, [isLoading, error])

  return (
    <>
      <Modal isOpen={isOpen && !isLoading} onClose={handleClose}>
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
              <UploadImage onFileLoad={(img: string) => setLocalImgUrl(img)} loaded={localImgUrl} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input
                variant="filled"
                placeholder="e.g. Hackathon guy"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Symbol</FormLabel>
              <Input
                variant="filled"
                placeholder="e.g. HG"
                value={symbol}
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
                value={description}
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
                {[...questsDiscord, ...questsSubmitForm].map((item, index) => (
                  <Checkbox value={JSON.stringify(item)} key={index} onChange={handleQuestCheck}>
                    <Flex justifyContent={'space-between'} alignItems={'center'} width="100%">
                      <FormHelperText color={foreground} margin="8px 0 12px 0">
                        <Text as="b">{item.name}</Text>
                        <Text>
                          {item.engagePoints} {item.symbol}
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
                  <Select
                    value={priceUnit}
                    onChange={(e) => setPriceUnit(e.target.value)}
                    variant={'unstyled'}
                  >
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
            <FormControl>
              <Button
                type="submit"
                onClick={handleSubmit}
                size="lg"
                bg={primary}
                _hover={{ bg: primaryHighlight }}
              >
                Create Badge
              </Button>
            </FormControl>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <DroppinModal
        isOpen={isOpen && isLoading}
        onClose={() => {
          return
        }}
        modatMessage={'Creating Badge, Please Wait'}
        modalStatus={0}
      />
    </>
  )
}

export default BadgeForm
