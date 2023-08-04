import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableLoading,
  Pagination,
  Badge,
} from '@components'
import { columns } from '@/app/(private)/students/objects'
import { useStudentsTable } from '@/app/(private)/students/hooks'
import {
  transformColorBadgeStatus,
  transformTextBadgeStatus,
} from '@/app/(private)/students/functions'
import type { BadgeColor } from '@components'
import { formatCPF, formatPhoneNumber } from '@utils'
import { Filters } from './components'
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
  } = useStudentsTable()

  return (
    <>
      <S.FiltersContainer>
        <Filters />
      </S.FiltersContainer>
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
                      <TableCell element="td">
                        <Badge
                          color={
                            transformColorBadgeStatus(
                              student.status,
                            ) as BadgeColor
                          }
                        >
                          {transformTextBadgeStatus(student.status)}
                        </Badge>
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
    </>
  )
}
