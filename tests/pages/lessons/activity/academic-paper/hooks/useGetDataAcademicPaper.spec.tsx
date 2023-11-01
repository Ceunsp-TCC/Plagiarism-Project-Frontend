import { renderHook, waitFor } from '@testing-library/react'
import {
  useGetAcademicPaper,
  useGetDataAcademicPaper,
} from '@/app/(private)/lessons/activity/academic-paper/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAcademicPaperByIdMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))

describe('check hook to get data request react query', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('check items has corret with status pending', async () => {
    getAcademicPaperByIdMock(200, 'PENDING')
    const { result: resultGenerateRequest } = renderHook(
      () => useGetAcademicPaper(),
      {
        wrapper,
      },
    )

    await waitFor(() =>
      expect(resultGenerateRequest.current.isLoading).toBe(false),
    )

    const { result } = renderHook(useGetDataAcademicPaper, { wrapper })

    expect(result.current.analysisStatus).toBeDefined()
    expect(result.current.hasSources).toBeDefined()
    expect(result.current.isCompleted).toBeDefined()
    expect(result.current.hasSources).toBeDefined()
  })
})
