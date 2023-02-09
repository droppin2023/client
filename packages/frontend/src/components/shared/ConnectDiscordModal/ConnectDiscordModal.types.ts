import { DiscordGuild, DiscordUser } from '@queries/common'
import { ModalProps } from '@types/modal'
import { APIGuild } from 'discord-api-types/v10'

export interface ConnectDiscordModalProps extends ModalProps {
  discordUser: DiscordUser
  guilds: APIGuild[]
  onSubmit?: (submittedGuild: DiscordGuild) => void
}
