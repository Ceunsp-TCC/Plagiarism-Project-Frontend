import type { FiltersFields } from '@/app/(private)/students/types'

type Filters = FiltersFields
export type StudentsState = {
  currentPage: number
  isOpenModalNewStudent: boolean
  filters: Filters
  setIsOpenModalNewStudent: (isOpenModalNewStudent: boolean) => void
  setCurrentPage: (currentPage: number) => void
  setFilters: (filters: Filters) => void
}
