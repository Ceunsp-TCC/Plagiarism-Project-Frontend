import Courses from '@/app/(private)/school/courses/page'
import { fireEvent, render, renderHook } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import { mockUserSchoolState } from '@tests/helpers'
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
describe('Courses', () => {
  it('Should be render a courses page', async () => {
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
  //   it('Should be open modal new course', async () => {
  //     const { getByText } = render(<Teachers />, {
  //       wrapper,
  //     })

  //     const newTeacherButton = getByText('Novo')

  //     act(() => {
  //       fireEvent.click(newTeacherButton)
  //     })

  //     const titleModal = getByText('Registre seu professor')

  //     expect(titleModal).toBeInTheDocument()
  //   })
})
