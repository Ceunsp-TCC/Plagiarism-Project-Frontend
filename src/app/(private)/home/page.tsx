'use client'
import { useAuthStore } from '@store'
export default function Home() {
  const { data } = useAuthStore()

  return (
    <div>
      <p>{data.user.email}</p>
    </div>
  )
}
