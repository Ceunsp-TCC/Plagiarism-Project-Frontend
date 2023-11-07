'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { notificationsServices } from '@services'
import { ShowToast } from '@components'
import { useRef, useEffect } from 'react'
import { useNavigation } from '@hooks'

export function useNotificationProvider() {
  const queryClient = useQueryClient()
  const { navigate } = useNavigation()
  const audioRef = useRef<HTMLAudioElement>(null)
  const REQUEST_INTERVAL = 15000 // fiveteen seconds

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
  const queryKeys = notification?.data.reactQueryKeys

  useEffect(() => {
    if (hasChangeInRequest) {
      audioRef.current?.play()
      ShowToast({
        title: 'Nova notificação',
        toastType: 'WARNING',
        description: message,
        onClick: () => {
          queryClient.refetchQueries(queryKeys)
          navigate(screen!)
        },
      })
    }
  }, [hasChangeInRequest])

  return {
    audioRef,
  }
}
