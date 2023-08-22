import React from 'react'
import { ModalNewSemester } from '@/app/(private)/school/courses/[id]/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useCourseStore } from '@store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { createSemesterMock } from '@tests/helpers'
import { faker } from '@faker-js/faker'
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
describe('ModalNewSemester', () => {
  it('Should be render a modal new semester', async () => {
    const { result } = renderHook(() => useCourseStore())
    act(() => {
      result.current.setIsOpenModalNewSemester(true)
    })
    const { getByPlaceholderText, getByText } = render(<ModalNewSemester />, {
      wrapper,
    })

    const title = getByText('Registre um semestre')
    const inputName = getByPlaceholderText('Digite o nome do semestre')
    const inputDescription = getByPlaceholderText(
      'Digite uma descrição para este semestre',
    )
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputDescription).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    const { result } = renderHook(() => useCourseStore())
    act(() => {
      result.current.setIsOpenModalNewSemester(true)
    })
    const { getByText } = render(<ModalNewSemester />, {
      wrapper,
    })

    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageName = getByText('Insira um nome válido')

      expect(errorMessageName).toBeInTheDocument()
    })
  })
  it('Should be create a semester', async () => {
    createSemesterMock(201)
    const { result } = renderHook(() => useCourseStore())
    act(() => {
      result.current.setIsOpenModalNewSemester(true)
    })
    const { getByPlaceholderText, getByText, findByText } = render(
      <ModalNewSemester />,
      {
        wrapper,
      },
    )
    const title = getByText('Registre um semestre')
    const inputName = getByPlaceholderText('Digite o nome do semestre')
    const inputDescription = getByPlaceholderText(
      'Digite uma descrição para este semestre',
    )
    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.change(inputName, {
        target: { value: faker.person.fullName() },
      })

      fireEvent.change(inputDescription, {
        target: { value: faker.person.fullName() },
      })

      fireEvent.click(buttonSave)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText('Semestre registrado com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })
})
