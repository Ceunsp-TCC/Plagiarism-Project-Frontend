import { create } from 'zustand'
import type { AcademicPaperViewState } from '@store'

export const useAcademicPaperViewStore = create<AcademicPaperViewState>(
  (set) => ({
    openAvaliationModal: false,
    setStateAvaliationModal: (openAvaliationModal) =>
      set({ openAvaliationModal }),
  }),
)
