import { renderHook, waitFor } from '@testing-library/react'
import { useGetActivities } from '@/app/(private)/lessons/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllActivitiesMock } from '@tests/helpers'
import { useAuthStore } from '@store'
import type { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useGetActivities', () => {
  it('Should return correct properties', async () => {
    getAllActivitiesMock(200)
    const { result } = renderHook(() => useGetActivities(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.activities).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
  })
})
