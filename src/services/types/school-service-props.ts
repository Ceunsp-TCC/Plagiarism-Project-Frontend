type Address = {
  CEP: string
  complement: string
  number: string
}

export type CreateProps = {
  name: string
  CNPJ: string
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
  address: Address
}
