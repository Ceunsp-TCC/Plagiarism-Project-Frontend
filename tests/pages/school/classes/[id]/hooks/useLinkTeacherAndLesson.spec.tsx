import { renderHook, waitFor } from '@testing-library/react'
import { useLinkTeacherAndLesson } from '@/app/(private)/school/classes/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('useLinkTeacherAndLesson', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useLinkTeacherAndLesson(), { wrapper })

    expect(result.current.isLoading).toBeDefined()
    expect(result.current.errors).toBeDefined()
    expect(result.current.payloadModalLinkTeacher).toBeDefined()
    expect(result.current.register).toBeDefined()
    expect(result.current.handleSubmit).toBeDefined()
    expect(result.current.onSubmit).toBeDefined()
    expect(result.current.onCloseModal).toBeDefined()
  })
})
