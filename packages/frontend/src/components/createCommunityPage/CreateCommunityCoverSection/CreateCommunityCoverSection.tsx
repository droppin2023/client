import { Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { orange, primary, primaryHighlight } from '@constants/colors'
import { LS_KEY_DISCORD_USER_GUILDS } from '@constants/discord'
import localStorageUtils from '@helpers/localStorageUtils'
import { useEffect } from 'react'
import { COVER_PAGE_RIGHT_COPY } from './CreateCommunityCoverSection.constants'
import { CreateCommunityCoverSectionProps } from './CreateCommunityCoverSection.types'

const CreateCommunityCoverSection = ({ onNext }: CreateCommunityCoverSectionProps) => {
  const renderList = (order: number, title: string, desc: string) => {
    return (
      <HStack key={order} align="top">
        <Text as="b">{`${order}.`}</Text>
        <VStack align="left">
          <Text as="b">{title}</Text>
          <Text color={orange}>{desc}</Text>
        </VStack>
      </HStack>
    )
  }

  const guildData =
    JSON.stringify(localStorageUtils.read(LS_KEY_DISCORD_USER_GUILDS) ?? {}) === '{}'
      ? {
          guilds: [],
        }
      : localStorageUtils.read(LS_KEY_DISCORD_USER_GUILDS)

  useEffect(() => {
    if (guildData.guilds.length > 0 && onNext) onNext()
  }, [guildData])

  // TODO : We have to check isLogin before onNext
  return (
    <Flex width="100%" height="90vh" justifyContent={'center'} alignItems="center">
      <Flex justifyContent={'space-between'} alignItems="center">
        <VStack spacing={5}>
          <Text as="b" fontSize="4xl" textAlign={'center'}>
            It&apos;s easy to start community on Droppin
          </Text>
          <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }} onClick={onNext}>
            Start
          </Button>
        </VStack>
        <VStack align="left">
          {COVER_PAGE_RIGHT_COPY.map(({ title, desc }, index) =>
            renderList(index + 1, title, desc),
          )}
        </VStack>
      </Flex>
    </Flex>
  )
}

export default CreateCommunityCoverSection
