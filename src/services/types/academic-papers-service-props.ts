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

export type Source = {
  title: string
  url: string
  plagiarism: number
}
export type Report = {
  id: number
  plagiarism: number
  originality: number
  sources: Source[]
  createdAt: string
}

export type StatusAcademicPaper = 'COMPLETED' | 'PENDING' | 'PROCESSING'

export type AcademicPaper = {
  id: number
  paper: string
  comments: string
  createdAt: string
  student: Student
  analysisStatus: StatusAcademicPaper
  report: Report | null
}
