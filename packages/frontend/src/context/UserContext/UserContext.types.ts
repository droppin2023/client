import { User } from '@components/queries/common'
import type { ReactNode } from 'react'

export interface LoginParams {
  loginAddress: string
}

export interface UserContextValue {
  user: User | null
  isLoggedIn: boolean
  isLoading: boolean
}

export interface UserProviderProps {
  children: ReactNode
}
