import { create } from 'zustand'
import type { CoursesState } from '@store'

export const useCoursesStore = create<CoursesState>((set) => ({
  currentPage: 1,
  isOpenModalNewCourse: false,
  filters: {
    name: '',
  },
  setIsOpenModalNewCourse: (isOpenModalNewCourse) =>
    set({ isOpenModalNewCourse }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setFilters: (filters) => set({ filters }),
}))
