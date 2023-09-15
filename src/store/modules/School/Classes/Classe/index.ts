import { create } from 'zustand'
import type { ClasseState } from '@/store/types'

export const useClasseStore = create<ClasseState>((set) => ({
  currentPage: 1,
  payloadModalLinkTeacher: {
    isOpen: false,
    lessonId: 0,
  },
  setCurrentPage: (currentPage) => set({ currentPage }),
  setIsOpenModalLinkTeacher: (payload) =>
    set({ payloadModalLinkTeacher: payload }),
}))
