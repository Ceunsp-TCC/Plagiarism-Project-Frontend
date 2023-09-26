import { create } from 'zustand'
import type { LessonsState } from '@store'

export const useLessonsStore = create<LessonsState>((set) => ({
  currentPage: 1,
  setCurrentPage: (currentPage) => set({ currentPage }),
}))
