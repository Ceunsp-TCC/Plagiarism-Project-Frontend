import { create } from 'zustand'
import type { CourseState } from '@store'

export const useCourseStore = create<CourseState>((set) => ({
  isOpenModalNewSemester: false,
  payloadModalNewLesson: {
    isOpen: false,
    semesterId: 0,
  },
  setIsOpenModalNewSemester: (isOpenModalNewSemester) =>
    set({ isOpenModalNewSemester }),
  setIsOpenModalNewLesson: (payload) => set({ payloadModalNewLesson: payload }),
}))
