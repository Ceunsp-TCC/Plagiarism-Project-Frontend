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
import { columns } from '@/app/(private)/school/classes/[id]/objects'
import { useGetStudents } from '@/app/(private)/school/classes/[id]/hooks'
import { formatCPF, formatPhoneNumber } from '@utils'
import * as S from './styles'

export function StudentsTable() {
  const {
    students,
    currentPage,
    numberPages,
    isLoading,
    enabledPagination,
    isEmpty,
    setCurrentPage,
  } = useGetStudents()

  return (
    <>
      <S.ContainerNameTable>
        <S.TitleTable>Alunos</S.TitleTable>
      </S.ContainerNameTable>
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
                      Nenhum aluno encontrado
                    </TableCell>
                  </TableRow>
                )}
                {!isEmpty &&
                  students?.items.map((student) => (
                    <TableRow forWhat="CONTENT" key={student.id}>
                      <TableCell element="td">{student.id}</TableCell>
                      <TableCell element="td">{student.name}</TableCell>
                      <TableCell element="td">{student.email}</TableCell>
                      <TableCell element="td">
                        {formatPhoneNumber(student.phoneNumber)}
                      </TableCell>
                      <TableCell element="td">
                        {formatCPF(student.cpf)}
                      </TableCell>
                      <TableCell element="td">{student.createdAt}</TableCell>
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
    </>
  )
}
