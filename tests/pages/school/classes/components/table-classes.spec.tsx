import { ClassesTable } from '@/app/(private)/school/classes/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useClassesStore } from '@store'
import { getAllClassesMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
describe('ClassesTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllClassesMock(200)
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <ClassesTable />,
      {
        wrapper,
      },
    )

    const filter = getByPlaceholderText('Digite o nome da classe')
    const loading = getByText('Carregando dados...')

    expect(filter).toBeInTheDocument()

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const rows = getAllByText('Teste-cllzwl7gb000044otcf6h9gat-2023')
    expect(rows).toHaveLength(12)
  })
  it('Should be not found class', async () => {
    getAllClassesMock(404)
    const { getByText } = render(<ClassesTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const notFoundText = getByText('Nenhuma classe encontrada')

    expect(notFoundText).toBeInTheDocument()
  })
  it('Should be filter by name', async () => {
    getAllClassesMock(200)
    const { result } = renderHook(() => useClassesStore())
    const { getByText, getByPlaceholderText } = render(<ClassesTable />, {
      wrapper,
    })
    const filter = getByPlaceholderText('Digite o nome da classe')
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
    getAllClassesMock(200)
    const { result } = renderHook(() => useClassesStore())
    const { getByText } = render(<ClassesTable />, {
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
