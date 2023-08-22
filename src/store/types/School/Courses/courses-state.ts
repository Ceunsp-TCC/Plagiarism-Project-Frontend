import type { FiltersFields } from '@/app/(private)/school/courses/types'

type Filters = FiltersFields
export type CoursesState = {
  currentPage: number
  isOpenModalNewCourse: boolean
  filters: Filters
  setIsOpenModalNewCourse: (isOpenModalNewCourse: boolean) => void
  setCurrentPage: (currentPage: number) => void
  setFilters: (filters: Filters) => void
}
