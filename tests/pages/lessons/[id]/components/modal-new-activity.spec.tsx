import React from 'react'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useLessonStore } from '@store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { createActivityMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'
import { ModalNewActivity } from '@/app/(private)/lessons/[id]/components'
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
describe('ModalNewActivity', () => {
  it('Should be render a modal', async () => {
    const { result } = renderHook(() => useLessonStore())
    act(() => {
      result.current.setIsOpenModalNewActivity(true)
    })
    const { getByText, getByPlaceholderText } = render(<ModalNewActivity />, {
      wrapper,
    })
    const title = getByText('Registre sua atividade')
    const inputTitle = getByPlaceholderText('Digite o título da atividade')
    const textAreaComments = getByPlaceholderText(
      'Se precisar digite uma observação',
    )
    const selectTypeActivity = getByPlaceholderText('Tipo de atividade')
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(inputTitle).toBeInTheDocument()
    expect(textAreaComments).toBeInTheDocument()
    expect(selectTypeActivity).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    const { result } = renderHook(() => useLessonStore())
    act(() => {
      result.current.setIsOpenModalNewActivity(true)
    })
    const { getByText } = render(<ModalNewActivity />, {
      wrapper,
    })

    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageTitle = getByText('Insira um título válido')
      const errorMessageTypeActivity = getByText('Insira uma atividade válida')

      expect(errorMessageTitle).toBeInTheDocument()
      expect(errorMessageTypeActivity).toBeInTheDocument()
    })
  })
  it('Should be link teacher and lesson', async () => {
    createActivityMock(200)

    const { result } = renderHook(() => useLessonStore())
    act(() => {
      result.current.setIsOpenModalNewActivity(true)
    })
    const { getByText, getByPlaceholderText, findByText } = render(
      <ModalNewActivity />,
      {
        wrapper,
      },
    )

    const title = getByText('Registre sua atividade')
    const inputTitle = getByPlaceholderText('Digite o título da atividade')
    const textAreaComments = getByPlaceholderText(
      'Se precisar digite uma observação',
    )
    const selectTypeActivity = getByPlaceholderText('Tipo de atividade')
    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.change(inputTitle, {
        target: { value: 'test' },
      })
      fireEvent.change(textAreaComments, {
        target: { value: 'obs test' },
      })

      fireEvent.change(selectTypeActivity, {
        target: { value: 'NOTICE' },
      })

      fireEvent.click(buttonSave)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText('Atividade registrada com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })
})
