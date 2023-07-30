import { Navbar } from '@components'
import { fireEvent, render, renderHook } from '@testing-library/react'
import { useAuthStore } from '@store'
import { mockUserSchoolState, logoutMock } from '@tests/helpers'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import type { ReactNode } from 'react'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('Navbar', () => {
  it('Should be render a navbar', () => {
    const { result } = renderHook(() => useAuthStore())
    const { getByText, getByTestId } = render(<Navbar />, { wrapper })

    const avatar = getByTestId('flowbite-avatar')

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
      fireEvent.click(avatar)
    })

    const settings = getByText('Configurações')
    const logout = getByText('Sair')
    const name = getByText('Isis e Aline Pães e Doces Ltda')
    const email = getByText('posvenda@daniloeheloisaentulhosltda.com.br')

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(settings).toBeInTheDocument()
    expect(logout).toBeInTheDocument()
  })
  it('Should be logout', () => {
    logoutMock(200)
    const { result } = renderHook(() => useAuthStore())
    const { getByText, getByTestId } = render(<Navbar />, { wrapper })

    const avatar = getByTestId('flowbite-avatar')

    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
      fireEvent.click(avatar)
    })

    const logout = getByText('Sair')

    act(() => {
      fireEvent.click(logout)
    })

    expect(logout).not.toBeInTheDocument()
  })
})
