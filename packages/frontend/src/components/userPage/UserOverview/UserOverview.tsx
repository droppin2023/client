import { Avatar, Button, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import Settings from '@components/icons/Settings'
import { orange, orangeHighlight, primaryHighlight } from '@constants/colors'
import { useUserPageContext } from '@context/UserPageContext'

import EditProfileModal from './components/EditProfileModal'

import DiscordIcon from '@components/icons/DiscordIcon'
import bannerOrnament from './assets/banner-ornament.svg'
import * as sty from './UserOverview.styles'

const UserOverview = () => {
  const {
    userData: { username, name, description, image, discord },
  } = useUserPageContext()

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false)

  return (
    <>
      <Flex
        width="100vw"
        position="relative"
        justifyContent={'center'}
        alignItems="center"
        bgImage={bannerOrnament.src}
        padding="88px 0"
        borderRadius="0 0 48px 48px"
      >
        <Flex
          position="relative"
          justifyContent={'space-between'}
          alignItems={'center'}
          width="75%"
          gap={10}
        >
          {image.length > 5 ? (
            <Image src={image} alt="User Image" width={180} height={180} css={[sty.userImage]} />
          ) : (
            <Avatar name={name} width="180px" height="180px" />
          )}

          <VStack align="left" width="100%" flex="3">
            <Flex justifyContent="space-between" alignItems="center">
              <HStack spacing={5}>
                <Text fontSize="4xl" as="b">
                  {name}
                </Text>
                <Text fontSize="4xl" color={primaryHighlight}>{`@${username}`}</Text>
              </HStack>
              <Button
                leftIcon={<Settings />}
                bg={orange}
                _hover={{ bg: orangeHighlight }}
                onClick={() => setIsEditProfileModalOpen(true)}
              >
                Edit
              </Button>
            </Flex>
            <HStack alignItems={'center'} spacing={4}>
              <DiscordIcon width="32px" height="32px" />
              <Text as="b" fontSize="xl">
                <Text>{discord.length > 0 ? discord : 'Not connected'}</Text>
              </Text>
            </HStack>
            <Text>{description}</Text>
          </VStack>
        </Flex>
      </Flex>
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
      />
    </>
  )
}

export default UserOverview
