import type { FiltersFields } from '@/app/(private)/ortography-corrections/types'

type Filters = FiltersFields

export type OrtographicCorrectionTableState = {
  currentPage: number
  filters: Filters
  isModalNewCorrectionOpen: boolean
  setCurrentPage: (currentPage: number) => void
  setFilters: (filters: Filters) => void
  setOpenModalNewCorrection: (isModalNewCorrectionOpen: boolean) => void
}
