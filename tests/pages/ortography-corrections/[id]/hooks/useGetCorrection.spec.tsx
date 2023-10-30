import { renderHook, waitFor } from '@testing-library/react'
import { useGetCorrection } from '@/app/(private)/ortography-corrections/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getOrtographyCorretionMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'
import type { ReactNode } from 'react'

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useGetCorrections', () => {
  it('Should return correct properties', async () => {
    getOrtographyCorretionMock(200)
    const { result } = renderHook(() => useGetCorrection(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.isOriginal).toBeDefined()
    expect(result.current.isResult).toBeDefined()
    expect(result.current.ortographyCorrection).toBeDefined()
    expect(result.current.ortographyCorrection).toBeDefined()
    expect(result.current.setViewMode).toBeDefined()
  })
  it('Should set view mode', async () => {
    getOrtographyCorretionMock(200)
    const { result } = renderHook(() => useGetCorrection(), { wrapper })

    act(() => {
      result.current.setViewMode('ORIGINAL')
    })

    expect(result.current.isOriginal).toBe(true)
  })
})
