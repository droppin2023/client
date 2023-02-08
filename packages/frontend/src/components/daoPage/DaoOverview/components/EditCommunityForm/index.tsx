import dynamic from 'next/dynamic'

const EditCommunityForm = dynamic(() => import('./EditCommunityForm'), {
  loading: () => <></>,
})

export default EditCommunityForm
