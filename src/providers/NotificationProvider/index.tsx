'use client'
import { useNotificationProvider } from '@/providers/hooks'

import type { NotificationProviderProps } from '@providers'

export function NotificationProvider({ children }: NotificationProviderProps) {
  const { audioRef } = useNotificationProvider()
  return (
    <>
      <audio
        src="https://bucket-school-guardian.s3.us-east-2.amazonaws.com/notification.mp3"
        ref={audioRef}
      />
      {children}
    </>
  )
}
