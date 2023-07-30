'use client'
import { useAuthStore } from '@store'
import { authServices } from '@services'
import { useMutation } from '@tanstack/react-query'
import { useNavigation } from '@hooks'

export function useNavbar() {
  const { navigate } = useNavigation()
  const { data, clearState } = useAuthStore()

  const { user } = data

  const { mutate } = useMutation(() => authServices.logout(), {
    onSuccess: () => {
      navigate('/login')
      clearState()
    },
    onError: () => {
      navigate('/login')
      clearState()
    },
  })

  const handleLogout = () => mutate()
  return {
    user,
    handleLogout,
  }
}
