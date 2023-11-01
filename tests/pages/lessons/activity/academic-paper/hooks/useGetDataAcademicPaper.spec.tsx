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
  beforeEach(async () => {
    getAcademicPaperByIdMock(200, 'PENDING')
    const { result } = renderHook(() => useGetAcademicPaper(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
  })
  it('check items has corret with status pending', () => {
    const { result } = renderHook(useGetDataAcademicPaper, { wrapper })

    waitFor(() => {
      expect(result.current.dataAcademicPaper.student).toBeDefined()
      expect(result.current.dataAcademicPaper.paper).toBeDefined()
      expect(result.current.dataAcademicPaper.report).toBeDefined()
      expect(result.current.dataAcademicPaper.comments).toBeDefined()
    })
  })

  beforeEach(async () => {
    queryClient.clear()
    getAcademicPaperByIdMock(200, 'PROCESSING')
    const { result } = renderHook(() => useGetAcademicPaper(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
  })
  it('check items has corret with status processing', () => {
    const { result } = renderHook(useGetDataAcademicPaper, { wrapper })

    waitFor(() => {
      expect(result.current.dataAcademicPaper.student).toBeDefined()
      expect(result.current.dataAcademicPaper.paper).toBeDefined()
      expect(result.current.dataAcademicPaper.report).toBeDefined()
      expect(result.current.dataAcademicPaper.comments).toBeDefined()
    })
  })

  beforeEach(async () => {
    queryClient.clear()
    getAcademicPaperByIdMock(200, 'PROCESSING')
    const { result } = renderHook(() => useGetAcademicPaper(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
  })

  it('check items has corret with status completed', () => {
    const { result } = renderHook(useGetDataAcademicPaper, { wrapper })

    waitFor(() => {
      expect(result.current.dataAcademicPaper.student).toBeDefined()
      expect(result.current.dataAcademicPaper.paper).toBeDefined()
      expect(result.current.dataAcademicPaper.report).toBeDefined()
      expect(result.current.dataAcademicPaper.comments).toBeDefined()
    })
  })
})
