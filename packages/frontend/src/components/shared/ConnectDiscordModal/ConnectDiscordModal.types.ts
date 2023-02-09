import { ModalProps } from '@/types/modal'
import { DiscordGuild, DiscordUser } from '@queries/common'
import { APIGuild } from 'discord-api-types/v10'

export interface ConnectDiscordModalProps extends ModalProps {
  discordUser: DiscordUser
  guilds: APIGuild[]
  onSubmit?: (submittedGuild: DiscordGuild) => void
}
