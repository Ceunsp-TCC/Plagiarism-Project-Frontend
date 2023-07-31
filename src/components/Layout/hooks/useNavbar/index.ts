'use client'
import { useAuthStore, useSettingsStore } from '@store'
import { authServices } from '@services'
import { useMutation } from '@tanstack/react-query'
import { useNavigation } from '@hooks'

export function useNavbar() {
  const { navigate } = useNavigation()
  const { data, clearState } = useAuthStore()
  const { openSidebarInMobileMode, setOpenSidebarInMobileMode } =
    useSettingsStore()

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

  const handleSidebarOpenOrClose = () =>
    setOpenSidebarInMobileMode(!openSidebarInMobileMode)

  const handleLogout = () => mutate()
  return {
    openSidebarInMobileMode,
    user,
    handleSidebarOpenOrClose,
    handleLogout,
  }
}
