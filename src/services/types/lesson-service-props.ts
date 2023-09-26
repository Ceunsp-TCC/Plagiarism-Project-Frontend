export type CreateLessonProps = {
  semesterId: number
  name: string
  place: string
  description?: string
}

export type Lesson = {
  id: number
  name: string
  description?: string
  place: string
  createdAt: string
}
export type GetAllLessonsByTeacherProps = {
  currentPage?: number
}

export type GetAllLessonsByStudentProps = {
  currentPage?: number
}
