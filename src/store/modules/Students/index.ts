import { create } from 'zustand'
import type { StudentsState } from '@/store/types'

export const useStudentsStore = create<StudentsState>((set) => ({
  currentPage: 1,
  isOpenModalNewStudent: false,
  filters: {
    name: '',
  },
  setIsOpenModalNewStudent: (isOpenModalNewStudent) =>
    set({ isOpenModalNewStudent }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setFilters: (filters) => set({ filters }),
}))
