import { useQuery } from '@tanstack/react-query'
import { getAddressService } from '@/services'

export function useAutoCompleteAddress(zipCode: string) {
  const {
    data: address,
    isError,
    isLoading,
    error,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ['auto-complete-adress'],
    queryFn: () => getAddressService(zipCode),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false,
  })
  const autoComplete = () => refetch()

  return {
    address,
    isLoading,
    isError,
    error,
    isSuccess,
    autoComplete,
  }
}
