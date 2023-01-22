import type { ReactNode } from 'react'

export interface DaoPageContextValue {
  isAdmin: boolean
  repUnit: string
  id: number
}

export interface DaoPageProviderProps {
  children: ReactNode
  isAdmin?: boolean
  repUnit: string
  id: number
}
