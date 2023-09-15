import React from 'react'
import { ModalNewStudent } from '@/app/(private)/school/students/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useStudentsStore } from '@store'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom, RandomPasswordModal } from '@components'
import { act } from 'react-dom/test-utils'
import { faker } from '@faker-js/faker'
import {
  validEmailMock,
  createStudentMock,
  getAllClassesMock,
} from '@tests/helpers'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    <RandomPasswordModal />
    {children}
  </QueryClientProvider>
)
describe('ModalNewStudent', () => {
  it('Should be render a modal new student', async () => {
    getAllClassesMock(200)
    const { result } = renderHook(() => useStudentsStore())
    act(() => {
      result.current.setIsOpenModalNewStudent(true)
    })
    const { getByText } = render(<ModalNewStudent />, {
      wrapper,
    })
    const title = getByText('Registre seu aluno')
    const inputName = getByText('Nome')
    const inputEmail = getByText('Email')
    const inputCPF = getByText('CPF')
    const inputPhoneNumber = getByText('Celular')
    const selectClass = getByText('Turma')
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputEmail).toBeInTheDocument()
    expect(inputCPF).toBeInTheDocument()
    expect(inputPhoneNumber).toBeInTheDocument()
    expect(selectClass).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    getAllClassesMock(200)
    validEmailMock(422)
    const { result } = renderHook(() => useStudentsStore())
    act(() => {
      result.current.setIsOpenModalNewStudent(true)
    })
    const { getByText } = render(<ModalNewStudent />, {
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
      const errorMessageClass = getByText('Insira uma turma válida')

      expect(errorMessageName).toBeInTheDocument()
      expect(errorPhoneNumber).toBeInTheDocument()
      expect(errorMessageCPF).toBeInTheDocument()
      expect(errorMessageEmail).toBeInTheDocument()
      expect(errorMessageClass).toBeInTheDocument()
    })
  })
  it('Should be create student', async () => {
    validEmailMock(200)
    createStudentMock(200)
    getAllClassesMock(200)
    const { result } = renderHook(() => useStudentsStore())
    act(() => {
      result.current.setIsOpenModalNewStudent(true)
    })
    const { getByText, getByPlaceholderText, debug, findAllByText } = render(
      <ModalNewStudent />,
      {
        wrapper,
      },
    )

    await findAllByText('Teste-cllzwl7gb000044otcf6h9gat-2023')
    const title = getByText('Registre seu aluno')
    const inputName = getByPlaceholderText('Digite o nome do aluno')
    const inputEmail = getByPlaceholderText('Digite o email do aluno')
    const inputCPF = getByPlaceholderText('999.999.999-99')
    const inputPhoneNumber = getByPlaceholderText('(99) 99999-9999')
    const selectClass = getByPlaceholderText('Selecione uma turma')

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
      fireEvent.change(selectClass, {
        target: { value: '1' },
      })

      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      expect(title).not.toBeInTheDocument()
      const titleModalRandomPassword = getByText(
        'Aluno registrado com sucesso!',
      )
      expect(titleModalRandomPassword).toBeInTheDocument()
    })
  })
})
