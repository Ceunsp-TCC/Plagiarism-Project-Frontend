import { renderHook } from '@testing-library/react'
import { useAvaliationModal } from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))

describe('useAvaliationModal', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be defined properties', async () => {
    const { result } = renderHook(useAvaliationModal, { wrapper })

    expect(result.current.hasNote).toBeDefined()
    expect(result.current.openAvaliationModal).toBeDefined()
    expect(result.current.selectedNote).toBeDefined()
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.closeModal).toBeDefined()
    expect(result.current.setSelectedNote).toBeDefined()
  })
})
