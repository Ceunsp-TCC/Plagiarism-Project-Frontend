import Courses from '@/app/(private)/school/courses/page'
import { fireEvent, render, renderHook } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import { mockUserSchoolState, getAllCoursesMock } from '@tests/helpers'
import { ToastContainerCustom } from '@components'
import { useAuthStore } from '@store'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
describe('Courses', () => {
  it('Should be render a courses page', async () => {
    getAllCoursesMock(200)
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })
    const { getByText } = render(<Courses />, {
      wrapper,
    })

    const title = getByText('Cursos')
    const description = getByText('Crie e gerencie seus cursos')
    const newCourseButton = getByText('Novo')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(newCourseButton).toBeInTheDocument()
  })
  it('Should be open modal new course', async () => {
    getAllCoursesMock(200)
    const { getByText } = render(<Courses />, {
      wrapper,
    })

    const newCourseButton = getByText('Novo')

    act(() => {
      fireEvent.click(newCourseButton)
    })

    const titleModal = getByText('Registre seu curso')

    expect(titleModal).toBeInTheDocument()
  })
})
