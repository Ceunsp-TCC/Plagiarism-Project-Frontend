'use client'
import { useAuthStore } from '@store'
import { checkHasPermission } from '@functions'
export default function Home() {
  const { data } = useAuthStore()

  return (
    <div>
      <p>{data.user.email}</p>
      {checkHasPermission('createRole') && <h1>tenho permissao</h1>}
    </div>
  )
}
