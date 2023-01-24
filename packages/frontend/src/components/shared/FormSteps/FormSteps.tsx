import { Flex } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { FormStepsProps } from './FormSteps.types'

const FormSteps = ({ steps }: FormStepsProps) => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Flex flexDir="column" width="75%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content(nextStep, prevStep)}
          </Step>
        ))}
      </Steps>
    </Flex>
  )
}

export default FormSteps
