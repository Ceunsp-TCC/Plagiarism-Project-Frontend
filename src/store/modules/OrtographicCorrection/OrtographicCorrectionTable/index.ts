import { create } from 'zustand'
import type { OrtographicCorrectionTableState } from '@store'

export const useOrtographicCorrectionTableStore =
  create<OrtographicCorrectionTableState>((set) => ({
    currentPage: 1,
    filters: {
      identifier: '',
    },
    isModalNewCorrectionOpen: false,
    setCurrentPage: (currentPage) => set({ currentPage }),
    setFilters: (filters) => set({ filters }),
    setOpenModalNewCorrection: (isModalNewCorrectionOpen) =>
      set({ isModalNewCorrectionOpen }),
  }))
