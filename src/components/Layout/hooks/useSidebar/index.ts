'use client'
import { usePermissions } from '@hooks'
import { useSettingsStore } from '@store'
export function useSidebar() {
  const { checkHasPermission } = usePermissions()
  const { openSidebarInMobileMode } = useSettingsStore()

  return {
    openSidebarInMobileMode,
    checkHasPermission,
  }
}
