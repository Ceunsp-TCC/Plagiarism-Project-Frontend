export type LoginProps = {
  email: string
  password: string
}

export type AccessToken = {
  type: string
  token: string
}
export interface SchoolData {
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

export type User = {
  id: number
  name: string
  email: string
  phoneNumber: string
  roleName: string
  createdAt: string
  schoolData?: SchoolData
  permissions: string[]
}

export type ContentLogin = {
  accessToken: AccessToken
  user: User
}
