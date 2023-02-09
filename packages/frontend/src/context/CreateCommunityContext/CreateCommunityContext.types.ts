import { Category, DiscordGuild, Quest } from '@queries/common'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

// const [localImgUrl, setLocalImgUrl] = useState('')
// const [name, setName] = useState('')
// const [description, setDescription] = useState('')
// const [website, setWebsite] = useState('')
// const [selectedCategory, setSelectedCategory] = useState<any>('')

export interface CreateCommunityContextValue {
  localImgUrl: string
  name: string
  description: string
  website: string
  selectedCategory: Category
  repUnit: string
  questsDiscord: Quest[]
  questsForm: Quest[]
  discord: DiscordGuild
  email: string
  password: string
  setLocalImgUrl: Dispatch<SetStateAction<string>>
  setName: Dispatch<SetStateAction<string>>
  setDescription: Dispatch<SetStateAction<string>>
  setWebsite: Dispatch<SetStateAction<string>>
  setSelectedCategory: Dispatch<SetStateAction<Category>>
  setRepUnit: Dispatch<SetStateAction<string>>
  setQuestsDiscord: Dispatch<SetStateAction<Quest[]>>
  setQuestsForm: Dispatch<SetStateAction<Quest[]>>
  setDiscord: Dispatch<SetStateAction<DiscordGuild>>
  setEmail: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
}

export interface CreateCommunityProviderProps {
  children: ReactNode
}
