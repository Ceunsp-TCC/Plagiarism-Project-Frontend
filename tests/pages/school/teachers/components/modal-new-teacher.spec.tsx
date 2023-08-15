import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useTeachersStore } from '@store'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom, RandomPasswordModal } from '@components'
import type { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'
import { faker } from '@faker-js/faker'
import { ModalNewTeacher } from '@/app/(private)/school/teachers/components'
import { validEmailMock, createTeacherMock } from '@tests/helpers'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    <RandomPasswordModal />
    {children}
  </QueryClientProvider>
)
describe('ModalNewTeacher', () => {
  it('Should be render a modal new teacher', async () => {
    const { result } = renderHook(() => useTeachersStore())
    act(() => {
      result.current.setIsOpenModalNewTeacher(true)
    })
    const { getByText, getByPlaceholderText } = render(<ModalNewTeacher />, {
      wrapper,
    })
    const title = getByText('Registre seu professor')
    const inputName = getByPlaceholderText('Digite o nome do professor')
    const inputEmail = getByPlaceholderText('Digite o email do professor')
    const inputCPF = getByPlaceholderText('999.999.999-99')
    const inputPhoneNumber = getByPlaceholderText('(99) 99999-9999')
    const inputCND = getByPlaceholderText('Digite o CND do professor')
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(inputCPF).toBeInTheDocument()
    expect(inputPhoneNumber).toBeInTheDocument()
    expect(inputCND).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    validEmailMock(422)
    const { result } = renderHook(() => useTeachersStore())
    act(() => {
      result.current.setIsOpenModalNewTeacher(true)
    })
    const { getByText } = render(<ModalNewTeacher />, {
      wrapper,
    })
    const buttonSave = getByText('Salvar')
    act(() => {
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageName = getByText('Insira um nome válido')
      const errorPhoneNumber = getByText('Insira um telefone celular válido')
      const errorMessageEmail = getByText('Insira um email válido')
      const errorMessageCPF = getByText('Insira um cpf válido')
      const errorMessageCND = getByText('Insira um CND válido')

      expect(errorMessageName).toBeInTheDocument()
      expect(errorPhoneNumber).toBeInTheDocument()
      expect(errorMessageCPF).toBeInTheDocument()
      expect(errorMessageEmail).toBeInTheDocument()
      expect(errorMessageCND).toBeInTheDocument()
    })
  })
  it('Should be create teacher', async () => {
    validEmailMock(200)
    createTeacherMock(200)
    const { result } = renderHook(() => useTeachersStore())
    act(() => {
      result.current.setIsOpenModalNewTeacher(true)
    })
    const { getByText, getByPlaceholderText } = render(<ModalNewTeacher />, {
      wrapper,
    })
    const title = getByText('Registre seu professor')
    const inputName = getByPlaceholderText('Digite o nome do professor')
    const inputEmail = getByPlaceholderText('Digite o email do professor')
    const inputCPF = getByPlaceholderText('999.999.999-99')
    const inputPhoneNumber = getByPlaceholderText('(99) 99999-9999')
    const inputCND = getByPlaceholderText('Digite o CND do professor')
    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.change(inputName, {
        target: { value: faker.person.fullName() },
      })
      fireEvent.change(inputEmail, {
        target: { value: faker.internet.email() },
      })
      fireEvent.change(inputCPF, {
        target: { value: '48733991812' },
      })
      fireEvent.change(inputPhoneNumber, {
        target: { value: '11942421224' },
      })
      fireEvent.change(inputCND, {
        target: { value: '123232323232' },
      })
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      expect(title).not.toBeInTheDocument()
      const titleModalRandomPassword = getByText(
        'Professor registrado com sucesso!',
      )

      expect(titleModalRandomPassword).toBeInTheDocument()
    })
  })
})
