'use client'
import { lessonServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useAuthStore, useLessonsStore } from '@store'
import { useNavigation } from '@hooks'

export function useLessonsTable() {
  const { data } = useAuthStore()
  const { currentPage, setCurrentPage } = useLessonsStore()
  const { navigate } = useNavigation()

  const isStudent = data.user.roleName === 'STUDENT'
  const isTeacher = data.user.roleName === 'TEACHER'

  const {
    data: lessons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['lessons', currentPage],
    queryFn: () => {
      if (isTeacher) {
        return lessonServices.getByTeacher({ currentPage })
      }
      if (isStudent) {
        return lessonServices.getByStudent({ currentPage })
      }
    },

    refetchOnWindowFocus: false,
    retry: false,
  })

  const isEmpty = isError
  const numberPages = lessons?.totalPages
  const enabledPagination = lessons?.totalRegisters! > 10
  const enabledItems = !isError && !isLoading

  return {
    lessons,
    isLoading,
    currentPage,
    numberPages,
    enabledPagination,
    isEmpty,
    enabledItems,
    setCurrentPage,
    navigate,
  }
}
