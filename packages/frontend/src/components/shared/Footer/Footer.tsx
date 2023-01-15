import { Flex, Text } from '@chakra-ui/react'

import DroppinLogo from '@components/icons/DroppinLogo'
import { primaryWeak } from '@constants/colors'

const Footer = () => {
  return (
    <Flex justifyContent={'center'} alignItems="center" padding="12px 0" bgColor={primaryWeak}>
      <DroppinLogo width="32px" height="32px" />
      <Text margin="0 0 0 12px">Silicon Bali Team &#169; 2023</Text>
    </Flex>
  )
}

export default Footer
