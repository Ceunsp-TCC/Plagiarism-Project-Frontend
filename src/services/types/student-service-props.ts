import type { StatusOtherUsers } from '@types'

export type CreateStudentProps = {
  name: string
  phoneNumber: string
  email: string
  CPF: string
  classId: number
}

export type CreateStudentContent = {
  randomPassword: string
}
export type GetAllStudentsProps = {
  currentPage?: number
  name?: string
}

export type Student = {
  id: number
  name: string
  phoneNumber: string
  email: string
  cpf: string
  status: StatusOtherUsers
  createdAt: string
}
