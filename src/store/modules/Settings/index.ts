import { create } from 'zustand'
import type { SettingState } from '@/store/types'

export const useSettingsStore = create<SettingState>((set, get) => ({
  openSidebarInMobileMode: false,
  setOpenSidebarInMobileMode: (openSidebarInMobileMode) =>
    set(() => ({
      openSidebarInMobileMode,
    })),
}))
