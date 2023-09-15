import { create } from 'zustand'
import type { ClassesState } from '@store'

export const useClassesStore = create<ClassesState>((set) => ({
  currentPage: 1,
  filters: { name: '' },
  setCurrentPage: (currentPage) => set({ currentPage }),
  setFilters: (filters) => set({ filters }),
}))
