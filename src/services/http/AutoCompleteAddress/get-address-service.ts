import { apiViaCep } from '@/services'
import type { GetAddressServiceResponse } from '@/services/types'

export const getAddressService = async (cep: string) => {
  const response = await apiViaCep.get<GetAddressServiceResponse>(
    `/ws/${cep.replace(/\D/g, '')}/json/`,
  )

  const hasInvalidCep = response.data.erro
  if (hasInvalidCep) {
    throw new Error('Invalid cep')
  }
  return response.data
}
