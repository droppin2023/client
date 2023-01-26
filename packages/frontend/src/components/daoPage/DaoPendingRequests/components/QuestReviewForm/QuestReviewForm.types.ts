export interface QuestReviewFormProps {
  isOpen: boolean
  onClose: () => void
  reviewContent: {
    quest: {
      id: number
      name: string
      engageScore: { number: number; unit: string }
      description: string
    }
    requestUser: {
      username: string
      address: string
      image: any
      name: string
    }
    requestAnswer: string
  }
}
