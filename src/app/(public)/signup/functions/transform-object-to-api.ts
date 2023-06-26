import type { PayloadSignUp } from '@/store/types'
export const transformObjectToApi = ({
  address,
  credentials,
  school,
}: PayloadSignUp) => ({
  name: school.name,
  CNPJ: school.CNPJ,
  phoneNumber: school.phoneNumber,
  email: school.email,
  password: credentials.password,
  confirmPassword: credentials.confirmPassword,
  address: {
    CEP: address.CEP,
    complement: address.complement!,
    number: address.number!,
  },
})
