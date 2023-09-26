import { renderHook, waitFor } from '@testing-library/react'
import { useLessonsTable } from '@/app/(private)/lessons/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import {
  getLessonsByStudent,
  getLessonsByTeacher,
  mockUserStudentState,
} from '@tests/helpers'
import { useAuthStore } from '@store'
import type { ReactNode } from 'react'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
describe('useLessonsTable', () => {
  it('Should return correct properties', async () => {
    const { result: resultAuth } = renderHook(() => useAuthStore(), { wrapper })

    act(() => {
      resultAuth.current.setUserState(mockUserStudentState as any)
    })

    getLessonsByStudent(200)
    getLessonsByTeacher(200)
    const { result } = renderHook(() => useLessonsTable(), { wrapper })

    await waitFor(() => expect(result.current.isLoading).toBe(false))
    expect(result.current.isLoading).toBeDefined()
    expect(result.current.lessons).toBeDefined()
    expect(result.current.currentPage).toBeDefined()
    expect(result.current.enabledPagination).toBeDefined()
    expect(result.current.isEmpty).toBeDefined()
    expect(result.current.numberPages).toBeDefined()
    expect(result.current.navigate).toBeDefined()
    expect(result.current.setCurrentPage).toBeDefined()
  })
})
