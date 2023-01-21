import type { ChangeEvent } from 'react'
import { useState } from 'react'

import {
  Button,
  FormControl,
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
} from '@chakra-ui/react'

import { LINK } from '@constants/categories'
import { background2, primary, primaryHighlight } from '@constants/colors'
import { useDaoPageContext } from '@context/DaoPageContext'

import { QuestCategories } from '@types/quest'
import { QUEST_CONDITION_OPTIONS } from './QuestForm.constants'
import type { QuestFormProps } from './QuestForm.types'

const NewQuestForm = ({ isOpen, onClose }: QuestFormProps) => {
  const [schemaHash, setSchemaHash] = useState('')
  const [questTitle, setQuestTitle] = useState('')
  const [reward, setReward] = useState(0)
  const [questCondition, setQuestCondition] = useState<QuestCategories>(LINK)

  const { repUnit } = useDaoPageContext()

  const handleChangeSchemaHash = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: add checks here

    setSchemaHash(e.target.value)
  }

  const handleChangeQuestTitle = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: add checks here

    setQuestTitle(e.target.value)
  }

  const handleChangeReward = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: add checks here

    setReward(parseInt(e.target.value))
  }

  const handleSubmit = () => {
    // TODO: add a POST operation to server
    console.log({
      schemaHash,
      questTitle,
      reward,
      questCondition,
    })
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={background2}>Create New Quest</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6} bg={background2}>
          <FormControl>
            <FormLabel>Schema Hash</FormLabel>
            <Input
              onChange={handleChangeSchemaHash}
              value={schemaHash}
              variant="filled"
              placeholder="Input your Schema Hash here"
            />
          </FormControl>

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
              <InputRightElement>
                <Text color={primary} as="b">
                  {repUnit}
                </Text>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Quest Condition</FormLabel>
            <Select
              onChange={(e) => setQuestCondition(e.target.value as QuestCategories)}
              variant="filled"
            >
              {QUEST_CONDITION_OPTIONS.map((item, index) => (
                <option value={item.value} key={index}>
                  {item.message}
                </option>
              ))}
            </Select>
          </FormControl>

          {/* TODO: add condition details */}
        </ModalBody>

        <ModalFooter bg={background2}>
          <Button onClick={handleSubmit} size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
            Create Quest
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default NewQuestForm
