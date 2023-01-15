import { Button, Flex, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { background, orange, orangeHighlight, primaryWeak } from '@constants/colors'

import DroppinLogo from '@components/icons/DroppinLogo'
import Search from '@components/icons/Search'

const Navbar = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems="center"
      padding={'16px 32px'}
      gap="24px"
      zIndex="20"
      backgroundColor={background}
    >
      <DroppinLogo width="48px" height="48px" />
      <InputGroup>
        <InputLeftElement pointerEvents={'none'}>
          <Search />
        </InputLeftElement>
        <Input variant="filled" placeholder="Search droppin" bgColor={primaryWeak} />
      </InputGroup>
      <HStack spacing="24px">
        <Button variant="ghost">Explore</Button>
        <Button variant="filled" bgColor={orange} _hover={{ bg: orangeHighlight }}>
          Connect Wallet
        </Button>
      </HStack>
    </Flex>
  )
}

export default Navbar
