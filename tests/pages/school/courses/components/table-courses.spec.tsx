import { CoursesTable } from '@/app/(private)/school/courses/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useCoursesStore } from '@store'
import { getAllCoursesMock } from '@tests/helpers'
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
describe('CoursesTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllCoursesMock(200)
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <CoursesTable />,
      {
        wrapper,
      },
    )

    const filter = getByPlaceholderText('Digite o nome do curso')
    const loading = getByText('Carregando dados...')

    expect(filter).toBeInTheDocument()

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const rows = getAllByText('Ciências da Computação2')

    expect(rows).toHaveLength(6)
  })
  it('Should be not found courses', async () => {
    getAllCoursesMock(404)
    const { getByText } = render(<CoursesTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const notFoundText = getByText('Nenhum curso encontrado')

    expect(notFoundText).toBeInTheDocument()
  })
  it('Should be filter by name', async () => {
    getAllCoursesMock(200)
    const { result } = renderHook(() => useCoursesStore())
    const { getByText, getByPlaceholderText } = render(<CoursesTable />, {
      wrapper,
    })
    const filter = getByPlaceholderText('Digite o nome do curso')
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
    getAllCoursesMock(200)
    const { result } = renderHook(() => useCoursesStore())
    const { getByText, getByPlaceholderText } = render(<CoursesTable />, {
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
