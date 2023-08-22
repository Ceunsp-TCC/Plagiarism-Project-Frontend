import type { Modality, CourseCategory } from '@types'
type Lesson = {
  id: number
  name: string
  description: string
  local: string
  createdAt: string
}
type Semester = {
  id: number
  name: string
  description: string
  createdAt: string
  lessons: Lesson[]
}

export type Course = {
  id: number
  name: string
  description?: string
  modality: Modality
  category: CourseCategory
  price: number
  image: string
  createdAt: string
  semesters: Semester[]
}

export type CreateCourseProps = {
  name: string
  description?: string
  modality: Modality
  category: CourseCategory
  price: number
  image: File
}
export type GetAllCoursesProps = {
  currentPage?: number
  name?: string
}
export type GetOneCourseProps = {
  courseId: number
}
