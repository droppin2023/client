import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import { ConnectDiscordModalProps } from './ConnectDiscordModal.types'

import { background2, primary, primaryHighlight } from '@constants/colors'
import { DiscordGuild } from '@queries/common'
import * as globalSty from '@styles'
import { ChangeEvent, useState } from 'react'

const ConnectDiscordModal = (props: ConnectDiscordModalProps) => {
  const {
    isOpen,
    onClose,
    discordUser,
    guilds,
    onSubmit = () => {
      return
    },
  } = props
  console.log(guilds, discordUser, 'wagaewgawgjewagawegewaugewauawku')

  const [selectedGuild, setSelectedGuild] = useState<DiscordGuild | null>()
  const [link, setLink] = useState('')

  const handleSelectGuild = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGuild(JSON.parse(e.target.value))
  }

  const handleSubmit = () => {
    if (selectedGuild) {
      const submissionMaterial = { ...selectedGuild }
      submissionMaterial['link'] = link

      onSubmit(submissionMaterial as DiscordGuild)
      onClose()
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={background2}>
        <ModalHeader>Connect Server to Discord</ModalHeader>
        <ModalBody>
          <>
            <FormControl mt={4}>
              <FormLabel>Select Server to Connect</FormLabel>
              <FormHelperText css={[globalSty.helperText]}>
                Select a server to attach to this community
              </FormHelperText>
              <Select variant="filled" placeholder="Select server" onChange={handleSelectGuild}>
                {guilds
                  .filter((item) => item.owner)
                  .map((item) => {
                    const value = {
                      guildId: item.id,
                      name: item.name,
                    }

                    return (
                      <option key={item.id} value={JSON.stringify(value)}>
                        {item.name}
                      </option>
                    )
                  })}
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Enter invite link</FormLabel>
              <FormHelperText css={[globalSty.helperText]}>
                Make sure the invite link matches and does not expire!
              </FormHelperText>
              <Input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://discord.gg/your-invite-link"
              />
            </FormControl>
          </>
        </ModalBody>
        <ModalFooter>
          <Button bg={primary} _hover={{ bg: primaryHighlight }} onClick={handleSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ConnectDiscordModal
