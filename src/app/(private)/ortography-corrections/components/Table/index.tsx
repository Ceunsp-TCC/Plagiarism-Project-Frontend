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
  Badge,
} from '@components'
import { Filters } from './components'
import { useGetCorrections } from '@/app/(private)/ortography-corrections/hooks'
import { columns } from '@/app/(private)/ortography-corrections/objects'
import * as S from './styles'

export function OrtographyCorrectionsTable() {
  const {
    currentPage,
    enabledPagination,
    isEmpty,
    isLoading,
    numberPages,
    ortographicCorrections,
    setCurrentPage,
  } = useGetCorrections()

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
                      Nenhuma correção encontrada
                    </TableCell>
                  </TableRow>
                )}

                {!isEmpty &&
                  ortographicCorrections?.items.map((correction) => {
                    const isCompleted = correction.status === 'COMPLETED'
                    const isProcessing = correction.status === 'PROCESSING'

                    return (
                      <TableRow forWhat="CONTENT" key={correction.id}>
                        <TableCell element="td">{correction.id}</TableCell>
                        <TableCell element="td">
                          {correction.userProvidedIdentifier}
                        </TableCell>
                        <TableCell element="td">
                          {correction.createdAt}
                        </TableCell>
                        <TableCell element="td">
                          <Badge color={isCompleted ? 'GREEN' : 'DARK'}>
                            {isCompleted ? 'Finalizado' : 'Processando'}
                          </Badge>
                        </TableCell>
                        <TableCell element="td">
                          {isProcessing ? (
                            'Correção não finalizada'
                          ) : (
                            <S.ButtonWrapper>
                              <S.ButtonCustom
                                onClick={() => console.log('test')}
                              >
                                Ver resultado
                              </S.ButtonCustom>
                            </S.ButtonWrapper>
                          )}
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
    </>
  )
}
