import { create } from 'zustand'
import type { AcademicPaperTableState } from '@store'

export const useAcademicPaperTableStore = create<AcademicPaperTableState>(
  (set) => ({
    currentPage: 1,
    setCurrentPage: (currentPage) => set({ currentPage }),
  }),
)
