import type { Modality, CourseCategory } from '@types'

export type GetAllCoursesProps = {
  currentPage?: number
  name?: string
}

export type CourseItem = {
  id: number
  name: string
  description?: string
  modality: Modality
  category: CourseCategory
  price: number
  image: string
  createdAt: string
}
