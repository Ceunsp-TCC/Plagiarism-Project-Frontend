/* eslint-disable no-unused-vars */
import { schoolServices } from '@/services'
import type { AxiosError } from 'axios'
export const checkIfDocumentIsValid = async (document: string) => {
  try {
    await schoolServices.validDocument(document)

    return true
  } catch (error) {
    const axiosErr = error as AxiosError
    const isInvalidDocument = axiosErr.response?.status === 400

    if (isInvalidDocument) {
      return false
    }
  }
}
