'use client'
import { useQuery } from '@tanstack/react-query'
import { notificationsServices } from '@services'
import { ShowToast } from '@components'
import { useRef, useEffect } from 'react'
import { useNavigation } from '@/hooks'

export function useNotificationProvider() {
  const { navigate } = useNavigation()
  const audioRef = useRef<HTMLAudioElement>(null)
  const REQUEST_INTERVAL = 10000 // ten seconds

  const { data: notification, dataUpdatedAt } = useQuery({
    queryKey: ['notification'],
    queryFn: () => notificationsServices.getNotification(),
    refetchOnWindowFocus: false,
    retry: false,
    refetchInterval: REQUEST_INTERVAL,
  })

  const hasChangeInRequest = dataUpdatedAt
  const message = notification?.message
  const screen = notification?.data.navigateTo

  useEffect(() => {
    if (hasChangeInRequest) {
      audioRef.current?.play()
      ShowToast({
        title: 'Nova notificação',
        toastType: 'WARNING',
        description: message,
        onClick: () => navigate(screen!),
      })
    }
  }, [hasChangeInRequest])

  return {
    audioRef,
  }
}
