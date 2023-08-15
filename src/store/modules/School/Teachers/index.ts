import { create } from 'zustand'
import type { TeachersState } from '@/store/types'

export const useTeachersStore = create<TeachersState>((set) => ({
  currentPage: 1,
  isOpenModalNewTeacher: false,
  filters: {
    name: '',
  },
  setIsOpenModalNewTeacher: (isOpenModalNewTeacher) =>
    set({ isOpenModalNewTeacher }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setFilters: (filters) => set({ filters }),
}))
