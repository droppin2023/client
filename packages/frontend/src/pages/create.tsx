import { Flex } from '@chakra-ui/react'

import FormSteps from '@components/shared/FormSteps'

import CreateCommunityCoverSection from '@components/createCommunityPage/CreateCommunityCoverSection'

import 'twin.macro'

const CreateCommunityPage = () => {
  const content = <Flex py={4}>Hello</Flex>

  const steps = [
    {
      label: 'Welcome !',
      content: (onNext: () => void, onPrev: () => void) => (
        <CreateCommunityCoverSection onNext={onNext} />
      ),
    },
    { label: 'Community Info', content: (onNext: () => void, onPrev: () => void) => content },
    { label: 'On-Chain Setup', content: (onNext: () => void, onPrev: () => void) => content },
  ]

  return (
    <Flex width="100vw" justifyContent={'center'} alignItems="center">
      <FormSteps steps={steps} />
    </Flex>
  )
}

export default CreateCommunityPage
