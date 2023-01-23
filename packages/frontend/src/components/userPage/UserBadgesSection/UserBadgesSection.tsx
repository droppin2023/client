import { Box, Button, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { useUserPageContext } from '@context/UserPageContext'

import SideScrollLeft from '@components/icons/SideScrollLeft'
import SideScrollRight from '@components/icons/SideScrollRight'
import QuestBadge from '@components/shared/QuestBadge'
import SectionHeader from '@components/shared/SectionHeader'
import { background2, orange } from '@constants/colors'

const UserBadgesSection = () => {
  const {
    userData: { badges, communitiesWithBadge },
  } = useUserPageContext()

  return (
    <VStack width="100%" align="left" spacing={10}>
      <Box>
        <Text textAlign="left" width="100%" mb={10}>
          <SectionHeader title={'Claimed Badges'} subtitle="" />
        </Text>
        <SimpleGrid
          columns={4}
          width={'100%'}
          bg={background2}
          justifyItems="center"
          padding="32px 64px"
          borderRadius="48px"
        >
          {badges.map((item) => (
            <QuestBadge key={item.id} name={item.name} img={item.logo} />
          ))}
        </SimpleGrid>
      </Box>
      <Box>
        <Text textAlign="left" width="100%">
          <SectionHeader title={'Joined Communities'} subtitle="" />
        </Text>
        <VStack spacing={5} align="left">
          {communitiesWithBadge.map((item, index) => (
            <Box textAlign={'left'} key={index} position="relative" width="100%">
              <Text fontSize="2xl" lineHeight={2.4} color={orange} as="b">
                {item.community.name}
              </Text>
              <HStack spacing={5}>
                {item.badges.map((item) => (
                  <QuestBadge key={item.id} name={item.name} img={item.logo} isLocked={false} />
                ))}
              </HStack>

              {/* TODO: write logic for the side scrollers */}
              <Button variant="unstyled" position="absolute" right="0" top="50%">
                <SideScrollRight width="48px" height="48px" />
              </Button>
              <Button variant="unstyled" position="absolute" left="0" top="50%">
                <SideScrollLeft width="48px" height="48px" />
              </Button>
            </Box>
          ))}
        </VStack>
      </Box>
    </VStack>
  )
}

export default UserBadgesSection
