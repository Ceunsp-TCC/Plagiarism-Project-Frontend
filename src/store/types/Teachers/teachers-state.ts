import type { FiltersFields } from '@/app/(private)/teachers/types'

type Filters = FiltersFields

export type TeachersState = {
  currentPage: number
  isOpenModalNewTeacher: boolean
  filters: Filters
  setIsOpenModalNewTeacher: (isOpenModalNewTeacher: boolean) => void
  setCurrentPage: (currentPage: number) => void
  setFilters: (filters: Filters) => void
}
