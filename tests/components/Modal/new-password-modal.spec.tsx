import { NewPasswordModal, ToastContainerCustom } from '@components'
import { useNewPasswordModalStore } from '@store'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { updatePasswordMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('NewPasswordModal', () => {
  it('Should be render a modal', async () => {
    const { result } = renderHook(() => useNewPasswordModalStore())
    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 0,
      })
    })
    const { getByText, getByPlaceholderText } = render(<NewPasswordModal />, {
      wrapper,
    })

    const title = getByText('title-test')
    const description = getByText('description-test')
    const inputPassword = getByPlaceholderText('Digite uma senha')
    const inputConfirmPassword = getByPlaceholderText('Confirme sua senha')
    const button = getByText('Trocar senha')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(inputPassword).toBeInTheDocument()
    expect(inputConfirmPassword).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
  it('Should be change password', async () => {
    updatePasswordMock(200)
    const { result } = renderHook(() => useNewPasswordModalStore())
    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 0,
      })
    })
    const { getByText, getByPlaceholderText } = render(<NewPasswordModal />, {
      wrapper,
    })

    const inputPassword = getByPlaceholderText('Digite uma senha')
    const inputConfirmPassword = getByPlaceholderText('Confirme sua senha')
    const button = getByText('Trocar senha')

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: 'Alpha@12' },
      })
      fireEvent.change(inputConfirmPassword, {
        target: { value: 'Alpha@12' },
      })
      fireEvent.click(button)
    })
    await waitFor(() => {
      expect(inputPassword).not.toBeInTheDocument()
      const toast = getByText('Senha atualizada!')
      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be not change password', async () => {
    updatePasswordMock(400)
    const { result } = renderHook(() => useNewPasswordModalStore())
    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 0,
      })
    })
    const { getByText, getByPlaceholderText } = render(<NewPasswordModal />, {
      wrapper,
    })

    const inputPassword = getByPlaceholderText('Digite uma senha')
    const inputConfirmPassword = getByPlaceholderText('Confirme sua senha')
    const button = getByText('Trocar senha')

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: 'Alpha@12' },
      })
      fireEvent.change(inputConfirmPassword, {
        target: { value: 'Alpha@12' },
      })
      fireEvent.click(button)
    })
    await waitFor(() => {
      expect(inputPassword).not.toBeInTheDocument()
      const toast = getByText('Ocorreu um erro')
      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be field is empty', async () => {
    const { result } = renderHook(() => useNewPasswordModalStore())
    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 0,
      })
    })
    const { getByText } = render(<NewPasswordModal />, {
      wrapper,
    })

    const button = getByText('Trocar senha')

    act(() => {
      fireEvent.click(button)
    })
    await waitFor(() => {
      const errorMessagePassword = getByText('Por favor, insira uma senha')
      const errorMessageConfirmPassword = getByText(
        'Por favor, confirme a senha',
      )
      expect(errorMessagePassword).toBeInTheDocument()
      expect(errorMessageConfirmPassword).toBeInTheDocument()
    })
  })
  it('Should be invalid password', async () => {
    const { result } = renderHook(() => useNewPasswordModalStore())
    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 0,
      })
    })
    const { getByText, getByPlaceholderText } = render(<NewPasswordModal />, {
      wrapper,
    })

    const inputPassword = getByPlaceholderText('Digite uma senha')
    const button = getByText('Trocar senha')

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: 'Al' },
      })
      fireEvent.click(button)
    })
    await waitFor(() => {
      const errorMessagePassword = getByText(
        'A senha deve conter pelo menos 1 letra maiúscula, minúscula, 1 número, 1 caractere especial (@, #, $) e ter no mínimo 8 caracteres.',
      )
      expect(errorMessagePassword).toBeInTheDocument()
    })
  })
  it('Should be password is differents', async () => {
    const { result } = renderHook(() => useNewPasswordModalStore())
    act(() => {
      result.current.setOpenModalNewPassword({
        title: 'title-test',
        description: 'description-test',
        userId: 0,
      })
    })
    const { getByText, getByPlaceholderText } = render(<NewPasswordModal />, {
      wrapper,
    })

    const inputPassword = getByPlaceholderText('Digite uma senha')
    const inputConfirmPassword = getByPlaceholderText('Confirme sua senha')
    const button = getByText('Trocar senha')

    act(() => {
      fireEvent.change(inputPassword, {
        target: { value: 'Alpha@12' },
      })
      fireEvent.change(inputConfirmPassword, {
        target: { value: 'Al' },
      })
      fireEvent.click(button)
    })
    await waitFor(() => {
      const errorMessageConfirmPassword = getByText('As senhas são diferentes')
      expect(errorMessageConfirmPassword).toBeInTheDocument()
    })
  })
})
