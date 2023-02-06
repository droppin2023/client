import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { useUserPageContext } from '@context/UserPageContext'

import QuestBadge from '@components/shared/QuestBadge'
import SectionHeader from '@components/shared/SectionHeader'
import { background2, orange, secondary } from '@constants/colors'
import { useRouter } from 'next/router'

const UserBadgesSection = () => {
  const {
    userData: { badges, communitiesWithBadge },
  } = useUserPageContext()

  const router = useRouter()

  return (
    <VStack width="100%" align="left" spacing={10}>
      <Box textAlign="left">
        <SectionHeader title={'Claimed Badges'} subtitle="" />
        {badges.length > 0 ? (
          <SimpleGrid
            columns={4}
            width={'100%'}
            bg={background2}
            justifyItems="center"
            padding="32px 64px"
            borderRadius="48px"
          >
            {badges.map((item) => (
              <QuestBadge
                key={item.id}
                name={item.name}
                img={item.image}
                isLocked={false}
                onClick={() => router.push(`/badge/${item.id}`)}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text as="b" color={secondary} fontSize="xl">
            The user does not have any claimed badges yet !
          </Text>
        )}
      </Box>
      <Box textAlign="left">
        <SectionHeader title={'Joined Communities'} subtitle="" />
        {communitiesWithBadge.length > 0 ? (
          <VStack spacing={5} align="left">
            {communitiesWithBadge.map((item, index) => (
              <Box textAlign={'left'} key={index} position="relative" width="100%">
                <Text fontSize="2xl" lineHeight={2.4} color={orange} as="b">
                  {item.community.name}
                </Text>
                <SimpleGrid spacing={5}>
                  {item.badges.map((item) => (
                    <QuestBadge
                      key={item.id}
                      name={item.name}
                      img={item.image}
                      isLocked={false}
                      onClick={() => router.push(`/badge/${item.id}`)}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            ))}
          </VStack>
        ) : (
          <Text as="b" color={secondary} fontSize="xl">
            The user is not a part of any community!
          </Text>
        )}
      </Box>
    </VStack>
  )
}

export default UserBadgesSection
