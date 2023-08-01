import { create } from 'zustand'
import type { StudentsState } from '@/store/types'

export const useStudentsStore = create<StudentsState>((set) => ({
  isOpenModalNewStudent: false,
  setIsOpenModalNewStudent: (isOpenModalNewStudent) =>
    set({ isOpenModalNewStudent }),
}))
