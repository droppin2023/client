import { Flex } from '@chakra-ui/react'

import FormSteps from '@components/shared/FormSteps'

import 'twin.macro'

const CreateCommunityPage = () => {
  const content = <Flex py={4}>Hello</Flex>

  const steps = [
    { label: 'Step 1', content },
    { label: 'Step 2', content },
    { label: 'Step 3', content },
  ]

  return (
    <>
      <FormSteps steps={steps} />
    </>
  )
}

export default CreateCommunityPage
