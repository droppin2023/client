import { Flex } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import { FormStepsProps } from './FormSteps.types'

const FormSteps = ({ steps, finishPage }: FormStepsProps) => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  return (
    <Flex flexDir="column" width="75%" mb={10}>
      {activeStep < steps.length ? (
        <Steps activeStep={activeStep} mb={10} mt={10}>
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content(nextStep, prevStep)}
            </Step>
          ))}
        </Steps>
      ) : (
        finishPage
      )}
    </Flex>
  )
}

export default FormSteps
