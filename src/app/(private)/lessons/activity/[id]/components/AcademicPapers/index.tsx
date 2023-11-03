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
import { columns } from '@/app/(private)/lessons/activity/[id]/objects'
import { useGetAcademicPapers } from '@/app/(private)/lessons/activity/[id]/hooks'
import * as S from './styles'

export function AcademicPapers() {
  const {
    academicPapers,
    enabledItems,
    isLoading,
    isEmpty,
    enabledPagination,
    numberPages,
    currentPage,
    setCurrentPage,
    navigate,
  } = useGetAcademicPapers()

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
                      Nenhum trabalho enviado
                    </TableCell>
                  </TableRow>
                )}
                {enabledItems &&
                  academicPapers?.items.map((academicPaper) => {
                    const hasNote = academicPaper.note !== null
                    return (
                      <TableRow forWhat="CONTENT" key={academicPaper.id}>
                        <TableCell element="td">{academicPaper.id}</TableCell>
                        <TableCell element="td">
                          {academicPaper.student.user.name}
                        </TableCell>
                        <TableCell element="td">
                          {hasNote
                            ? academicPaper.note
                            : 'Trabalho não avaliado'}
                        </TableCell>
                        <TableCell element="td">
                          {academicPaper.createdAt}
                        </TableCell>
                        <TableCell element="td">
                          <S.ButtonWrapper>
                            <S.ButtonCustom
                              onClick={() =>
                                navigate(
                                  `/lessons/activity/academic-paper/${academicPaper.id}`,
                                )
                              }
                            >
                              Ver trabalho
                            </S.ButtonCustom>
                          </S.ButtonWrapper>
                        </TableCell>
                      </TableRow>
                    )
                  })}
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
