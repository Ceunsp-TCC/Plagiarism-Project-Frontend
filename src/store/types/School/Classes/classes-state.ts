import type { FiltersFields } from '@/app/(private)/school/classes/types'

type Filters = FiltersFields

export type ClassesState = {
  currentPage: number
  filters: Filters
  setCurrentPage: (currentPage: number) => void
  setFilters: (filters: Filters) => void
}
