import { renderHook } from '@testing-library/react'
import { useSidebar } from '@/components/Layout/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { ToastContainerCustom } from '@components'

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
describe('useSidebar', () => {
  it('Should return correct properties', () => {
    const { result } = renderHook(() => useSidebar(), { wrapper })

    expect(result.current.checkHasPermission).toBeDefined()
    expect(result.current.openSidebarInMobileMode).toBeDefined()
  })
})
