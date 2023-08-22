import React from 'react'
import { ModalNewLesson } from '@/app/(private)/school/courses/[id]/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useCourseStore } from '@store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { createLessonMock } from '@tests/helpers'
import { faker } from '@faker-js/faker'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('ModalNewLesson', () => {
  it('Should be render a modal new lesson', async () => {
    const { result } = renderHook(() => useCourseStore())
    act(() => {
      result.current.setIsOpenModalNewLesson({ isOpen: true, semesterId: 1 })
    })
    const { getByText } = render(<ModalNewLesson />, {
      wrapper,
    })

    const title = getByText('Registre uma aula')
    const inputName = getByText('Nome')
    const inputPlace = getByText('Local')
    const inputDescription = getByText('Descrição')
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputPlace).toBeInTheDocument()
    expect(inputDescription).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    const { result } = renderHook(() => useCourseStore())

    act(() => {
      result.current.setIsOpenModalNewLesson({ isOpen: true, semesterId: 1 })
    })
    const { getByText } = render(<ModalNewLesson />, {
      wrapper,
    })

    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageName = getByText('Insira um nome válido')
      const errorMessagePlace = getByText('Insira um local válido')

      expect(errorMessageName).toBeInTheDocument()
      expect(errorMessagePlace).toBeInTheDocument()
    })
  })
  it('Should be create a lesson', async () => {
    createLessonMock(200)
    const { result } = renderHook(() => useCourseStore())

    act(() => {
      result.current.setIsOpenModalNewLesson({ isOpen: true, semesterId: 1 })
    })
    const { getByText, getByPlaceholderText, findByText } = render(
      <ModalNewLesson />,
      {
        wrapper,
      },
    )
    const title = getByText('Registre uma aula')
    const inputName = getByPlaceholderText('Digite o nome da aula')
    const inputPlace = getByPlaceholderText('Digite o local da aula')
    const inputDescription = getByPlaceholderText(
      'Digite uma descrição para esta aula',
    )

    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.change(inputName, {
        target: { value: faker.person.fullName() },
      })

      fireEvent.change(inputPlace, {
        target: { value: faker.person.fullName() },
      })

      fireEvent.change(inputDescription, {
        target: { value: faker.person.fullName() },
      })

      fireEvent.click(buttonSave)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText('Aula registrada com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })
})
