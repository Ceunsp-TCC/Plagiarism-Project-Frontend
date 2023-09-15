import { renderHook, waitFor } from '@testing-library/react'
import { useGetClass } from '@/app/(private)/school/classes/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getOneClassMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useGetClass', () => {
  it('Should return correct properties', async () => {
    getOneClassMock(200)
    const { result } = renderHook(() => useGetClass(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.classe).toBeDefined()
    expect(result.current.checkAccordionIsOpened).toBeDefined()
    expect(result.current.onOpenOrCloseAccordions).toBeDefined()
  })
})
