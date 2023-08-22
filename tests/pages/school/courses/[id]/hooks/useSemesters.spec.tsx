import { renderHook } from '@testing-library/react'
import { useSemesters } from '@/app/(private)/school/courses/[id]/hooks'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('useSemesters', () => {
  it('Should return correct properties', async () => {
    const { result } = renderHook(() => useSemesters(), { wrapper })

    expect(result.current.semesters).toBeDefined()
    expect(result.current.setIsOpenModalNewLesson).toBeDefined()
    expect(result.current.setIsOpenModalNewSemester).toBeDefined()
    expect(result.current.checkAccordionIsOpened).toBeDefined()
    expect(result.current.onOpenOrCloseAccordions).toBeDefined()
  })
})
