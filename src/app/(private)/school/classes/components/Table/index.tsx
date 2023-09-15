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
import { columns } from '@/app/(private)/school/classes/objects'
import { useClassesTable } from '@/app/(private)/school/classes/hooks'
import { Filters } from './components'
import * as S from './styles'

export function ClassesTable() {
  const {
    classes,
    isLoading,
    isEmpty,
    enabledItems,
    enabledPagination,
    currentPage,
    numberPages,
    setCurrentPage,
    navigate,
  } = useClassesTable()
  return (
    <div className="mt-12">
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
                      Nenhuma classe encontrada
                    </TableCell>
                  </TableRow>
                )}
                {enabledItems &&
                  classes?.items.map((classe) => (
                    <TableRow forWhat="CONTENT" key={classe.id}>
                      <TableCell element="td">{classe.id}</TableCell>
                      <TableCell element="td">{classe.name}</TableCell>
                      <TableCell element="td">{classe.createdAt}</TableCell>
                      <TableCell element="td">
                        <S.ButtonWrapper>
                          <S.ButtonCustom
                            onClick={() =>
                              navigate(`/school/classes/${classe.id}`)
                            }
                          >
                            Ver detalhes
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
