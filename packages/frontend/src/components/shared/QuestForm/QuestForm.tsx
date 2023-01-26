import type { ChangeEvent } from 'react'
import { useState } from 'react'

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
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

import { background2, discordPurple, primary, primaryHighlight } from '@constants/colors'
import * as globalSty from '@styles'

import DiscordIcon from '@components/icons/DiscordIcon'
import { QuestType } from '@components/queries/common'
import usePostCreateQuest from '@components/queries/usePostCreateQuest'
import { formatBytes32String } from 'ethers/lib/utils.js'
import { QUEST_CONDITION_OPTIONS } from './QuestForm.constants'
import type { QuestFormProps } from './QuestForm.types'

const NewQuestForm = ({ groupId, isOpen, onClose, repUnit = 'Engagement' }: QuestFormProps) => {
  // const [schemaHash, setSchemaHash] = useState('')
  const [questTitle, setQuestTitle] = useState('')
  const [questDetail, setQuestDetail] = useState('')
  const [reward, setReward] = useState(0)
  const [questCondition, setQuestCondition] = useState<QuestType>(QuestType.form)
  const { createQuest, isLoading, error } = usePostCreateQuest()

  // const handleChangeSchemaHash = (e: ChangeEvent<HTMLInputElement>) => {
  //   // TODO: add checks here

  //   setSchemaHash(e.target.value)
  // }

  const handleChangeQuestTitle = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: add checks here

    setQuestTitle(e.target.value)
  }

  const handleChangeQuestCondition = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuestCondition(parseInt(e.target.value) as QuestType)
  }

  const handleChangeReward = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: add checks here

    setReward(parseInt(e.target.value))
  }

  const handleChangeDetail = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: add checks here

    setQuestDetail(e.target.value)
  }

  const handleSubmit = async () => {
    const params = {
      contract: {
        name: formatBytes32String(questTitle),
        groupId: groupId,
        engagePoints: reward,
      },
      // TODO : Discord
      condition: {
        type: questCondition,
      },
      detail: questDetail,
      name: questTitle,
    }
    const res = await createQuest(params)
    if (res.msg == 'success') {
      //TODO:add confirm toaster
      onClose()
    }
    // TODO: add a POST operation to server
    // TODO : Add loading modal
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Create New Quest</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {/* <FormControl>
            <FormLabel>Schema Hash</FormLabel>
            <Input
              onChange={handleChangeSchemaHash}
              value={schemaHash}
              variant="filled"
              placeholder="Input your Schema Hash here"
            />
          </FormControl> */}

          <FormControl mt={4}>
            <FormLabel>Title</FormLabel>
            <Input
              onChange={handleChangeQuestTitle}
              value={questTitle}
              variant="filled"
              placeholder="e.g. Join a Hackathon"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Reward Community Engagement</FormLabel>
            <InputGroup>
              <Input
                onChange={handleChangeReward}
                value={reward}
                variant="filled"
                type="number"
                placeholder="1000"
              />
              <InputRightElement width={repUnit === 'Engagement' ? '120px' : 'auto'} padding="8px">
                <Text color={primary} as="b">
                  {repUnit}
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Quest Condition</FormLabel>
            <Select onChange={handleChangeQuestCondition} variant="filled">
              {QUEST_CONDITION_OPTIONS.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.message}
                </option>
              ))}
            </Select>
          </FormControl>

          {/* TODO: add condition details */}
          {questCondition === QuestType.form && (
            <FormControl mt={4}>
              <FormLabel>Condition detail</FormLabel>
              <FormHelperText css={[globalSty.helperText]}>
                Guide members how to complete this quest! Markdown syntax is supported.
              </FormHelperText>
              <Textarea
                variant="filled"
                placeholder="Write some more detail about the quest here"
                value={questDetail}
                onChange={handleChangeDetail}
              />
            </FormControl>
          )}

          {questCondition === QuestType.discord && (
            <>
              <FormControl mt={4}>
                <FormLabel>Connect Discord</FormLabel>
                <FormHelperText css={[globalSty.helperText]}>
                  To use this condition, you have to connect discord account
                </FormHelperText>
                <Button bgColor={discordPurple}>
                  <DiscordIcon />
                  <Text ml={4}>Connect Discord</Text>
                </Button>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Condition detail</FormLabel>
                <FormHelperText css={[globalSty.helperText]}>
                  Guide members on how to complete this quest! Markdown syntax is supported.
                </FormHelperText>
                <Textarea
                  variant="filled"
                  placeholder="Write some more detail about the quest here"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Auto Verification</FormLabel>
                <FormHelperText css={[globalSty.helperText]}>
                  We support auto verifications for some conditions, so that you don’t have to check
                  each quest review{' '}
                </FormHelperText>
                <VStack align="left" width="100%">
                  <Flex alignItems={'space-between'} width="100%">
                    <Checkbox flex="2">Discord Role</Checkbox>

                    {/* TODO: customize this according to the server */}
                    <Select variant="filled" flex="1">
                      <option value="admin">Admin</option>
                      <option value="moderator">Moderator</option>
                      <option value="captain">Captain</option>
                    </Select>
                  </Flex>

                  <Flex alignItems={'space-between'} width="100%">
                    <Checkbox flex="2">Join length</Checkbox>

                    {/* TODO: customize this according to the server */}
                    <Select variant="filled" flex="1">
                      <option value="1">1 month</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                    </Select>
                  </Flex>
                </VStack>
              </FormControl>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
            Create Quest
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewQuestForm
