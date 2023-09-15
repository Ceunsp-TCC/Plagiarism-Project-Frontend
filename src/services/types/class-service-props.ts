export type CreateClassProps = {
  courseId: number
}

export type GetAllClassesProps = {
  currentPage?: number
  numberlinesPerPage?: number
  name?: string
}
type UserInformations = {
  name: string
}

type Teacher = {
  user: UserInformations
}

type Lesson = {
  id: number
  name: string
  description: string
  place: string
  createdAt: string
  teacher: Teacher | null
}
type Semester = {
  id: number
  name: string
  description: string
  createdAt: string
  lessons: Lesson[]
}
export type Class = {
  id: number
  name: string
  createdAt: string
  semesters: Semester[]
}

export type GetOneClassProps = {
  classId: number
}
export type GetStudentsByClassProps = {
  classId: number
  currentPage?: number
  numberlinesPerPage?: number
  name?: string
}

export type LinkTeacherAndLessonProps = {
  lessonId: number
  teacherId: number
}
