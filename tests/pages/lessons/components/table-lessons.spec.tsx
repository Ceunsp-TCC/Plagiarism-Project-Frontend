import { LessonsTable } from '@/app/(private)/lessons/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useLessonsStore, useAuthStore } from '@store'
import { getLessonsByStudent, mockUserStudentState } from '@tests/helpers'
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
describe('LessonsTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserStudentState as any)
    })
    getLessonsByStudent(200)
    const { getByText, getAllByText } = render(<LessonsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const rows = getAllByText('Ingles')

    expect(rows).toHaveLength(11)
  })
  it('Should be not found lessons', async () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserStudentState as any)
    })
    getLessonsByStudent(404)
    const { getByText } = render(<LessonsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const notFoundText = getByText('Nenhuma aula encontrada')

    expect(notFoundText).toBeInTheDocument()
  })

  it('Should be pagination work', async () => {
    getLessonsByStudent(200)
    const { result: resultAuth } = renderHook(() => useAuthStore())

    act(() => {
      resultAuth.current.setUserState(mockUserStudentState as any)
    })

    const { result } = renderHook(() => useLessonsStore())
    const { getByText, debug } = render(<LessonsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const buttonNextPagination = getByText('Próximo')
    debug()
    act(() => {
      fireEvent.click(buttonNextPagination)
    })

    expect(result.current.currentPage).toBe(1)
  })
})
