import React from 'react'
import { ModalLinkTeacher } from '@/app/(private)/school/classes/[id]/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useClasseStore } from '@store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { getAllTeachersMock, linkTeacherAndLessonMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('ModalLinkTeacher', () => {
  it('Should be render a modal link teacher and lesson', async () => {
    getAllTeachersMock(200)
    const { result } = renderHook(() => useClasseStore())
    act(() => {
      result.current.setIsOpenModalLinkTeacher({ isOpen: true, lessonId: 1 })
    })
    const { getByText } = render(<ModalLinkTeacher />, {
      wrapper,
    })
    const title = getByText('Vincule um professor a está aula')
    const selectTeacher = getByText('Professor')
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(selectTeacher).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    getAllTeachersMock(200)
    const { result } = renderHook(() => useClasseStore())
    act(() => {
      result.current.setIsOpenModalLinkTeacher({ isOpen: true, lessonId: 1 })
    })
    const { getByText } = render(<ModalLinkTeacher />, {
      wrapper,
    })

    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageSelectTeacher = getByText('Insira um professor válido')

      expect(errorMessageSelectTeacher).toBeInTheDocument()
    })
  })
  it('Should be link teacher and lesson', async () => {
    linkTeacherAndLessonMock(200)
    getAllTeachersMock(200)
    const { result } = renderHook(() => useClasseStore())
    act(() => {
      result.current.setIsOpenModalLinkTeacher({ isOpen: true, lessonId: 1 })
    })
    const { getByText, getByPlaceholderText, findAllByText, findByText } =
      render(<ModalLinkTeacher />, {
        wrapper,
      })

    await findAllByText('Diogo Nathan Julio Ribeiro')
    const title = getByText('Vincule um professor a está aula')
    const selectTeacher = getByPlaceholderText('Selecione um Professor')
    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.change(selectTeacher, {
        target: { value: '1' },
      })

      fireEvent.click(buttonSave)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText('Professor vinculado com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })
})
