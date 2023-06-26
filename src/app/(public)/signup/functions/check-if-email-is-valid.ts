/* eslint-disable no-unused-vars */
import { userServices } from '@/services'
import type { AxiosError } from 'axios'
export const checkIfEmailIsValid = async (email: string) => {
  try {
    await userServices.validEmail(email)

    return true
  } catch (error) {
    const axiosErr = error as AxiosError
    const isInvalidEmail = axiosErr.response?.status === 400

    if (isInvalidEmail) {
      return false
    }
  }
}
