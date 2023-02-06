import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface DaoPageContextValue {
  isAdmin: boolean
  repUnit: string
  id: number
  setSubmitCount: Dispatch<SetStateAction<number>>
}

export interface DaoPageProviderProps {
  children: ReactNode
  isAdmin?: boolean
  repUnit: string
  id: number
  setSubmitCount: Dispatch<SetStateAction<number>>
}
