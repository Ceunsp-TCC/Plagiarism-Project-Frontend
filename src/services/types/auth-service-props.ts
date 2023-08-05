import type { Permissions, StatusOtherUsers, Role } from '@types'

export type LoginProps = {
  email: string
  password: string
}

export type AccessToken = {
  type: string
  token: string
}
export type SchoolData = {
  cnpj: string
  cep: string
  street: string
  district: string
  city: string
  state: string
  complement: string
  number: number
  status: string
}
export type StudentData = {
  cpf: string
  randomPassword: boolean
  status: StatusOtherUsers
}
export type TeacherData = {
  cpf: string
  randomPassword: boolean
  cnd: string
  status: StatusOtherUsers
}

export type User = {
  id: number
  name: string
  email: string
  phoneNumber: string
  roleName: Role
  createdAt: string
  schoolData?: SchoolData
  studentData?: StudentData
  teacherData?: TeacherData
  permissions: Permissions[]
}

export type ContentLogin = {
  accessToken: AccessToken
  user: User
}

export type UpdatePasswordProps = {
  userId: number
  password: string
  confirmPassword: string
}
