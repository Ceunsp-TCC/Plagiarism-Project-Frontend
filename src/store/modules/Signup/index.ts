/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import type { SignupState } from '@/store/types'

export const useSignupStore = create<SignupState>((set) => ({
  step: 'FORMSCHOOL',
  payload: {
    school: {
      CNPJ: '',
      email: '',
      name: '',
      phoneNumber: '',
    },
    address: {
      CEP: '',
      complement: '',
      number: '',
    },
    credentials: {
      password: '',
      confirmPassword: '',
    },
  },
  setStepState: async (step) => {
    await set(() => ({ step }))
  },
  setSchoolState: (school) =>
    set((state) => ({ payload: { ...state.payload, school } })),
  setSchoolAddressState: (address) =>
    set((state) => ({ payload: { ...state.payload, address } })),
  setSchoolCredentialsState: (credentials) =>
    set((state) => ({ payload: { ...state.payload, credentials } })),
}))
