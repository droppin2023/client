import { User } from '@queries/common'
import type { ReactNode } from 'react'

export interface LoginParams {
  loginAddress: string
}

export interface UserContextValue {
  user: User | null
  isLoggedIn: boolean
  isLoading: boolean
  handleUserLogin: (username: string) => Promise<void>
}

export interface UserProviderProps {
  children: ReactNode
}
