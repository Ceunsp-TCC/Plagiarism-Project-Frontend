/* eslint-disable no-unused-vars */
import { userServices } from '@/services'
import type { AxiosError } from 'axios'
export const checkIfZipcodeIsValid = async (zipcode: string) => {
  try {
    await userServices.validZipcode(zipcode)

    return true
  } catch (error) {
    const axiosErr = error as AxiosError

    const isInvalidZipcode = axiosErr.response?.status === 400
    if (isInvalidZipcode) {
      return false
    }
  }
}
