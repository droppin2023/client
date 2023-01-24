import { ReactNode } from 'react'

interface StepItem {
  label: string
  content: ReactNode
}

export interface FormStepsProps {
  steps: StepItem[]
}
