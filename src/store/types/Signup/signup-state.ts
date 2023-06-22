import type {
  FormSchoolAddressFields,
  FormSchoolCredentialsFields,
  FormSchoolFields,
} from '@/app/(public)/signup/types'

export type StepsSignUp =
  | 'FORMSCHOOL'
  | 'FORMSCHOOLADDRESS'
  | 'FORMSCHOOLCREDENTIALS'
  | 'WARNINGACCOUNTINREVIEW'

export type PayloadSignUp = {
  school: FormSchoolFields
  address: FormSchoolAddressFields
  credentials: FormSchoolCredentialsFields
}

export type SignupState = {
  step: StepsSignUp
  payload: PayloadSignUp
  setStepState: (step: StepsSignUp) => void
  setSchoolState: (school: FormSchoolFields) => void
  setSchoolAddressState: (address: FormSchoolAddressFields) => void
  setSchoolCredentialsState: (credentials: FormSchoolCredentialsFields) => void
}
