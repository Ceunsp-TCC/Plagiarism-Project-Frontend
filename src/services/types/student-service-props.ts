import type { StatusOtherUsers } from '@/@types/base-types'
export type CreateStudentProps = {
  name: string
  phoneNumber: string
  email: string
  CPF: string
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
