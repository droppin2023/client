import { ReactNode } from 'react'

export interface ProfileDropdownProps {
  children: ReactNode
  openAccountModal: () => void
  walletAddress: string
}
