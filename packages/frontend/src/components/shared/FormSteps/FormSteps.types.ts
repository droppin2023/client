import { ReactNode } from 'react'

interface StepItem {
  label: string
  content: (onNext: () => void, onPrev: () => void) => ReactNode
}

export interface FormStepsProps {
  steps: StepItem[]
}
