import dynamic from 'next/dynamic'

const ConnectDiscordModal = dynamic(() => import('./ConnectDiscordModal'), {
  loading: () => <></>,
})

export default ConnectDiscordModal
