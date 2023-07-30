import { renderHook } from '@testing-library/react'
import { useNavbar } from '@/components/Layout/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { logoutMock } from '@tests/helpers'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'

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
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('useNavbar', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useNavbar(), { wrapper })

    expect(result.current.handleLogout).toBeDefined()
    expect(result.current.user).toBeDefined()
  })

  it('Should be call hande logout', async () => {
    logoutMock(200)
    const { result } = renderHook(() => useNavbar(), { wrapper })

    const handleLogoutMock = jest.spyOn(result.current, 'handleLogout')

    act(() => {
      result.current.handleLogout()
    })
    expect(handleLogoutMock).toHaveBeenCalled()
  })
})
