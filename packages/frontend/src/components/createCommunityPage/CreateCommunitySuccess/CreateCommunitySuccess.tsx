import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import Done from '@components/icons/Done'
import { primary, primaryHighlight } from '@constants/colors'

const CreateCommunitySuccess = () => {
  return (
    <Flex width="100%" height="80vh" justifyContent="center" alignItems="center">
      <VStack spacing={5}>
        <Done width="64px" height="64px" />
        <Text as="b" fontSize="6xl">
          All done!
        </Text>
        <Text color={primary}>Start growing your community by inviting members!</Text>
        <Button size="lg" bg={primary} _hover={{ bg: primaryHighlight }}>
          Start Exploring
        </Button>
      </VStack>
    </Flex>
  )
}

export default CreateCommunitySuccess
