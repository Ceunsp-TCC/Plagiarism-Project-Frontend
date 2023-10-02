import { renderHook, waitFor } from '@testing-library/react'
import { useGetActivity } from '@/app/(private)/lessons/activity/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getActivityMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useGetActivity', () => {
  it('Should return correct properties', async () => {
    getActivityMock(200, 'ACADEMICPAPER')
    const { result } = renderHook(() => useGetActivity(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.activity).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
  })
})
