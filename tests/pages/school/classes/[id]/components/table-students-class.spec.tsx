import { StudentsTable } from '@/app/(private)/school/classes/[id]/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useClasseStore } from '@store'
import { getAllStudentsByClassMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('StudentsTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllStudentsByClassMock(200)
    const { getByText, getAllByText } = render(<StudentsTable />, {
      wrapper,
    })
    const title = getByText('Alunos')
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const rows = getAllByText('(62) 99277-8258')

    expect(rows).toHaveLength(12)
    expect(title).toBeVisible()
  })
  it('Should be not found student', async () => {
    getAllStudentsByClassMock(404)
    const { getByText } = render(<StudentsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const notFoundText = getByText('Nenhum aluno encontrado')

    expect(notFoundText).toBeInTheDocument()
  })

  it('Should be pagination work', async () => {
    getAllStudentsByClassMock(200)
    const { result } = renderHook(() => useClasseStore())
    const { getByText } = render(<StudentsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const buttonNextPagination = getByText('Próximo')
    act(() => {
      fireEvent.click(buttonNextPagination)
    })

    expect(result.current.currentPage).toBe(2)
  })
})
