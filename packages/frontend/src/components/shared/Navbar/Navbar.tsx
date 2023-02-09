import { Button, Flex, HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import DroppinLogo from '@components/icons/DroppinLogo'
import Search from '@components/icons/Search'
import { background, primaryWeak } from '@constants/colors'
import DroppinConnectButton from '../DroppinConnectButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems="center"
      padding={'16px 32px'}
      gap="32px"
      zIndex="20"
      width="100%"
      backgroundColor={background}
    >
      <HStack spacing={10} width="57%">
        <DroppinLogo width="48px" height="48px" />
        <InputGroup>
          <InputLeftElement pointerEvents={'none'}>
            <Search />
          </InputLeftElement>
          <Input
            variant="filled"
            placeholder="Search communities or address..."
            bgColor={primaryWeak}
          />
        </InputGroup>
      </HStack>

      <Flex justifyContent={'flex-end'} gap="32px" alignItems="center" width="35%">
        <Link href="/search">
          <Button variant="ghost">Search</Button>
        </Link>

        <DroppinConnectButton />
      </Flex>
    </Flex>
  )
}

export default Navbar
