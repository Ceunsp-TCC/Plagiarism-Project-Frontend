'use client'
import { TableLoading, Pagination } from '@components'
import { useNavigation } from '@hooks'
import { useCoursesTable } from '@/app/(private)/school/courses/hooks'
import { Item, Filters } from './components'
import * as S from './styles'

export function CoursesTable() {
  const {
    courses,
    isLoading,
    enabledItems,
    isEmpty,
    currentPage,
    enabledPagination,
    numberPages,
    setCurrentPage,
  } = useCoursesTable()
  const { navigate } = useNavigation()
  return (
    <>
      <S.FiltersContainer>
        <Filters />
      </S.FiltersContainer>
      <S.Container>
        {isLoading && <TableLoading />}
        {isEmpty && (
          <S.ContainerMessageIsEmpty>
            <S.MessageIsEmpty>Nenhum curso encontrado</S.MessageIsEmpty>
          </S.ContainerMessageIsEmpty>
        )}
        {enabledItems && (
          <S.ContainerItems>
            {courses?.items.map((course) => (
              <Item
                key={course.id}
                image={course.image}
                name={course.name}
                description={course.description}
                category={course.category}
                modality={course.modality}
                price={course.price}
                createdAt={course.createdAt}
                onClick={() => navigate(`/school/courses/${course.id}`)}
              />
            ))}
          </S.ContainerItems>
        )}

        {enabledPagination && (
          <S.ContainerPagination>
            <Pagination
              currentPage={currentPage}
              numberPages={numberPages!}
              onNextPage={() => setCurrentPage(currentPage + 1)}
              onCurrentPage={(currentPage) => setCurrentPage(currentPage)}
              onPreviousPage={() => setCurrentPage(currentPage - 1)}
            />
          </S.ContainerPagination>
        )}
      </S.Container>
    </>
  )
}
