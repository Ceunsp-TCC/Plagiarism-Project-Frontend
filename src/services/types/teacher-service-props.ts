import type { StatusOtherUsers } from '@types'

export type CreateTeacherProps = {
  name: string
  phoneNumber: string
  email: string
  CPF: string
  CND: string
}

export type CreateTeacherContent = {
  randomPassword: string
}

export type GetAllTeachersProps = {
  currentPage?: number
  name?: string
}
export type Teacher = {
  id: number
  name: string
  phoneNumber: string
  email: string
  cpf: string
  status: StatusOtherUsers
  createdAt: string
}
