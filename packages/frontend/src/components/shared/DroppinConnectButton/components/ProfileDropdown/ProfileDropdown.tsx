import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { background2, secondaryWeak } from '@constants/colors'
import { useRouter } from 'next/router'
import { ProfileDropdownProps } from './ProfileDropdown.types'

const ProfileDropdown = ({ children, openAccountModal, walletAddress }: ProfileDropdownProps) => {
  const router = useRouter()

  // TODO: later on integrate real data for the routes
  const menuData = [
    {
      name: 'Profile',
      onClick: () => router.push('/user/metalboyrick'),
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
    {
      name: `View Wallet ${walletAddress}`,
      onClick: openAccountModal,
    },
  ]

  return (
    <Menu>
      <MenuButton as={Button}>{children}</MenuButton>
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
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default ProfileDropdown
