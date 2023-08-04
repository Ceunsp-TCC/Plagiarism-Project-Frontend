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
import { columns } from '@/app/(private)/teachers/objects'
import { useTeachersTable } from '@/app/(private)/teachers/hooks'
import {
  transformColorBadgeStatus,
  transformTextBadgeStatus,
} from '@/app/(private)/teachers/functions'
import type { BadgeColor } from '@components'
import { formatCPF, formatPhoneNumber } from '@utils'
import { Filters } from './components'
import * as S from './styles'

export function TeachersTable() {
  const {
    teachers,
    currentPage,
    numberPages,
    isLoading,
    enabledPagination,
    isEmpty,
    setCurrentPage,
  } = useTeachersTable()

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
                      Nenhum professor encontrado
                    </TableCell>
                  </TableRow>
                )}
                {!isEmpty &&
                  teachers?.items.map((teacher) => (
                    <TableRow forWhat="CONTENT" key={teacher.id}>
                      <TableCell element="td">{teacher.id}</TableCell>
                      <TableCell element="td">{teacher.name}</TableCell>
                      <TableCell element="td">{teacher.email}</TableCell>
                      <TableCell element="td">
                        {formatPhoneNumber(teacher.phoneNumber)}
                      </TableCell>
                      <TableCell element="td">
                        {formatCPF(teacher.cpf)}
                      </TableCell>
                      <TableCell element="td">{teacher.createdAt}</TableCell>
                      <TableCell element="td">
                        <Badge
                          color={
                            transformColorBadgeStatus(
                              teacher.status,
                            ) as BadgeColor
                          }
                        >
                          {transformTextBadgeStatus(teacher.status)}
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
