export type SendAcademicPaperProps = {
  paper: File
  comments?: string
}

export type GetAllAcademicPapersProps = {
  activityId: number
  currentPage?: number
}

export type GetAcademicPaperByIdProps = {
  academicPaperId: number
}

type User = {
  name: string
}

type Student = {
  user: User
}

export type AcademicPaper = {
  id: number
  paper: string
  comments: string
  createdAt: string
  student: Student
}
