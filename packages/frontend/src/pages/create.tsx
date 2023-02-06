import { Flex } from '@chakra-ui/react'

import { CreateCommunityProvider } from '@context/CreateCommunityContext'

import FormSteps from '@components/shared/FormSteps'

import CreateCommunityCoverSection from '@components/createCommunityPage/CreateCommunityCoverSection'
import CreateCommunityInfoForm from '@components/createCommunityPage/CreateCommunityInfoForm'

import CreateCommunitySuccess from '@components/createCommunityPage/CreateCommunitySuccess'
import 'twin.macro'

const CreateCommunityPage = () => {
  // the state management is handled within the context

  const steps = [
    {
      label: 'Welcome !',
      content: (onNext: () => void, onPrev: () => void) => (
        <CreateCommunityCoverSection onNext={onNext} />
      ),
    },
    {
      label: 'Community Info',
      content: (onNext: () => void, onPrev: () => void) => (
        <CreateCommunityInfoForm onNext={onNext} onPrev={onPrev} />
      ),
    },
    // {
    //   label: 'On-Chain Setup',
    //   content: (onNext: () => void, onPrev: () => void) => (
    //     <CreateCommunityOnChainForm onNext={onNext} onPrev={onPrev} />
    //   ),
    // },
  ]

  return (
    <CreateCommunityProvider>
      <Flex width="100vw" justifyContent={'center'} alignItems="center">
        <FormSteps steps={steps} finishPage={<CreateCommunitySuccess />} />
      </Flex>
    </CreateCommunityProvider>
  )
}

export default CreateCommunityPage
