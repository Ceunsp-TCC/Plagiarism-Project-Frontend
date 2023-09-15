import { renderHook, waitFor } from '@testing-library/react'
import { useGetClasses } from '@/app/(private)/school/students/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllClassesMock } from '@tests/helpers'
import { ToastContainerCustom } from '@components'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('useGetClasses', () => {
  it('Should return correct properties', async () => {
    getAllClassesMock(200)
    const { result } = renderHook(() => useGetClasses(), { wrapper })
    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(result.current.classes).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
  })
})
