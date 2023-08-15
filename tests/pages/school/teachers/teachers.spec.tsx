import Teachers from '@/app/(private)/school/teachers/page'
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
describe('Teachers', () => {
  it('Should be render a teachers page', async () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })
    const { getByText } = render(<Teachers />, {
      wrapper,
    })

    const title = getByText('Professores')
    const description = getByText('Gerencie seus professores')
    const newTeacherButton = getByText('Novo')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(newTeacherButton).toBeInTheDocument()
  })
  it('Should be open modal new teacher', async () => {
    const { getByText } = render(<Teachers />, {
      wrapper,
    })

    const newTeacherButton = getByText('Novo')

    act(() => {
      fireEvent.click(newTeacherButton)
    })

    const titleModal = getByText('Registre seu professor')

    expect(titleModal).toBeInTheDocument()
  })
})
