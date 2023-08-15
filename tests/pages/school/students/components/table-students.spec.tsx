import { StudentsTable } from '@/app/(private)/school/students/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useStudentsStore } from '@store'
import { getAllStudentsMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('StudentsTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllStudentsMock(200)
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <StudentsTable />,
      {
        wrapper,
      },
    )

    const filter = getByPlaceholderText('Digite o nome do aluno')
    const loading = getByText('Carregando dados...')

    expect(filter).toBeInTheDocument()

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const rows = getAllByText('Ativo')

    expect(rows).toHaveLength(12)
  })
  it('Should be not found student', async () => {
    getAllStudentsMock(404)
    const { getByText } = render(<StudentsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const notFoundText = getByText('Nenhum aluno encontrado')

    expect(notFoundText).toBeInTheDocument()
  })
  it('Should be filter by name', async () => {
    getAllStudentsMock(200)
    const { result } = renderHook(() => useStudentsStore())
    const { getByText, getByPlaceholderText } = render(<StudentsTable />, {
      wrapper,
    })
    const filter = getByPlaceholderText('Digite o nome do aluno')
    const loading = getByText('Carregando dados...')

    act(() => {
      fireEvent.change(filter, {
        target: { value: 'test filter' },
      })
    })
    await waitFor(() => expect(loading).not.toBeInTheDocument())

    expect(result.current.filters.name).toBe('test filter')
  })
  it('Should be pagination work', async () => {
    getAllStudentsMock(200)
    const { result } = renderHook(() => useStudentsStore())
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
