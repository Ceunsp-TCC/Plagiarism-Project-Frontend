import type { CourseCategory, Modality } from '@types'

export type ItemProps = {
  image: string
  name: string
  description?: string
  category: CourseCategory
  modality: Modality
  price: number
  createdAt: string
  onClick: () => void
}
