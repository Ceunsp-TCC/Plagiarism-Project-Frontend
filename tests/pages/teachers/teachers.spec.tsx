import Teachers from '@/app/(private)/teachers/page'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import { ToastContainerCustom } from '@components'
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
