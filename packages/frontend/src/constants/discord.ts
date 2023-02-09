import { env } from '@shared/environment'

export const LS_KEY_DISCORD_USER = 'discord_user'
export const LS_KEY_DISCORD_USER_GUILDS = 'discord_user_guilds'

export const LS_KEY_IS_CONNECT_DISCORD_OPEN = 'is_connect_discord_open'

export const LS_GET_USER_GUILD_DESTINATION = 'discord_get_user_guild_destination'

export const DISCORD_REDIRECT_USER = `${env.url}/discord-callback/user`
export const DISCORD_REDIRECT_GET_USER_GUILDS = `${env.url}/discord-callback/get-user-guilds`
export const DISCORD_REDIRECT_CHECK_USER_QUEST_CONDITION = `${env.url}/discord-callback/check-user-quest-condition`
