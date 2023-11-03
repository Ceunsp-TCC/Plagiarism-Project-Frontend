import React from 'react'
import { render, renderHook } from '@testing-library/react'
import { useAcademicPaperViewStore } from '@store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { AvaliationModal } from '@/app/(private)/lessons/activity/academic-paper/[id]/components'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('AvaliationModal', () => {
  it('Should be render a modal', async () => {
    const { result } = renderHook(() => useAcademicPaperViewStore())
    act(() => {
      result.current.setStateAvaliationModal(true)
    })
    const { getByText } = render(<AvaliationModal />, {
      wrapper,
    })

    const title = getByText('Escolha uma nota de 0 a 10')
    const noteButton = getByText('1')
    const saveButton = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(noteButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })
  it('Should be disabled save button if doesnt selected note', async () => {
    const { result } = renderHook(() => useAcademicPaperViewStore())
    act(() => {
      result.current.setStateAvaliationModal(true)
    })
    const { getByText } = render(<AvaliationModal />, {
      wrapper,
    })

    const saveButton = getByText('Salvar')

    expect(saveButton).toBeDisabled()
  })
})
