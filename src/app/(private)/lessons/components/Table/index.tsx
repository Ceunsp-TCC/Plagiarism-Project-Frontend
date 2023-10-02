'use client'
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableLoading,
  Pagination,
} from '@components'
import { columns } from '@/app/(private)/lessons/objects'
import { useLessonsTable } from '@/app/(private)/lessons/hooks'
import * as S from './styles'

export function LessonsTable() {
  const {
    lessons,
    isLoading,
    isEmpty,
    enabledItems,
    enabledPagination,
    currentPage,
    numberPages,
    setCurrentPage,
    navigate,
  } = useLessonsTable()

  return (
    <div className="mt-12">
      {isLoading && <TableLoading />}
      {!isLoading && (
        <>
          <TableContainer className="mb-3">
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column} element="th">
                      {column}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {isEmpty && (
                  <TableRow forWhat="CONTENT">
                    <TableCell
                      element="td"
                      className="text-center"
                      colSpan={columns.length}
                    >
                      Nenhuma aula encontrada
                    </TableCell>
                  </TableRow>
                )}
                {enabledItems &&
                  lessons?.items.map((lesson) => (
                    <TableRow forWhat="CONTENT" key={lesson.id}>
                      <TableCell element="td">{lesson.id}</TableCell>
                      <TableCell element="td">{lesson.name}</TableCell>
                      <TableCell element="td">{lesson.place}</TableCell>
                      <TableCell element="td">{lesson.createdAt}</TableCell>
                      <TableCell element="td">
                        <S.ButtonWrapper>
                          <S.ButtonCustom
                            onClick={() => navigate(`/lessons/${lesson.id}`)}
                          >
                            Ver Aula
                          </S.ButtonCustom>
                        </S.ButtonWrapper>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {enabledPagination && (
            <S.PaginationContainer>
              <Pagination
                currentPage={currentPage}
                numberPages={numberPages!}
                onNextPage={() => setCurrentPage(currentPage + 1)}
                onCurrentPage={(currentPage) => setCurrentPage(currentPage)}
                onPreviousPage={() => setCurrentPage(currentPage - 1)}
              />
            </S.PaginationContainer>
          )}
        </>
      )}
    </div>
  )
}
