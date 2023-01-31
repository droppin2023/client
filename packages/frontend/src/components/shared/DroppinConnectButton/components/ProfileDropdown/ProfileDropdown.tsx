import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { background2, secondaryWeak } from '@constants/colors'
import { useRouter } from 'next/router'
import { ProfileDropdownProps } from './ProfileDropdown.types'
import { useUserContext } from '@context/UserContext'

const ProfileDropdown = ({ children }: ProfileDropdownProps) => {
  const router = useRouter()
  const { user } = useUserContext()
  console.log(user)
  // TODO: later on integrate real data for the routes
  const menuData = [
    {
      name: 'Profile',
      onClick: () => router.push(`/user/${user?.username}`),
    },
    {
      name: 'My Communities',
      // TODO: add my communities route later on
      onClick: () => router.push('/'),
    },
    {
      name: 'Create',
      onClick: () => router.push('/create'),
    },
  ]

  return (
    <Menu>
      <MenuButton as={Box} cursor="pointer">
        {children}
      </MenuButton>
      <MenuList bg={background2} border="none">
        {menuData.map((item, index) => (
          <MenuItem
            key={index}
            padding="16px 16px"
            minWidth="100px"
            bg={background2}
            _hover={{ bg: secondaryWeak }}
            onClick={item.onClick}
          >
            <Flex justifyContent="space-between" alignItems="center" width="100%">
              <Text>{item.name}</Text>
              <ChevronRightIcon />
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default ProfileDropdown
