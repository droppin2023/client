import dynamic from 'next/dynamic'

const QuestDetailModal = dynamic(() => import('./QuestDetailModal'), {
  loading: () => <></>,
})

export default QuestDetailModal
