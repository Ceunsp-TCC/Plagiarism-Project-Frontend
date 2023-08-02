import { create } from 'zustand'
import type { TeachersState } from '@/store/types'

export const useTeachersStore = create<TeachersState>((set) => ({
  isOpenModalNewTeacher: false,
  setIsOpenModalNewTeacher: (isOpenModalNewTeacher) =>
    set({ isOpenModalNewTeacher }),
}))
