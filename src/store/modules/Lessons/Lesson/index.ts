import { create } from 'zustand'
import type { LessonState } from '@store'

export const useLessonStore = create<LessonState>((set) => ({
  isOpenModalNewActivity: false,
  setIsOpenModalNewActivity: (isOpenModalNewActivity) =>
    set({ isOpenModalNewActivity }),
}))
