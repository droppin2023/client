import { SERVER_URL } from '@constants/serverConfig'
import axios from 'axios'

export const uploadImage = async (blobUrl: string): Promise<string> => {
  // get the blob instance
  const imgBlob = await fetch(blobUrl).then((r) => r.blob())

  const payload = new FormData()

  payload.append('file', new File([imgBlob], 'upload.png'))

  const postRes = await axios.post(`${SERVER_URL}/upload`, payload)

  return postRes.data.url
}
