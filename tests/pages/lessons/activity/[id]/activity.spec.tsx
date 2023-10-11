import Activity from '@/app/(private)/lessons/activity/[id]/page'
import { render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import {
  getActivityMock,
  mockUserStudentState,
  mockUserTeacherState,
} from '@tests/helpers'
import { useAuthStore } from '@/store'
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
describe('Activity', () => {
  beforeEach(() => {
    useAuthStore.getState().clearState()
    queryClient.clear()
  })
  it('Should be render a activity page if is academic paper and is student', async () => {
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserStudentState as any)
    })
    getActivityMock(200, 'ACADEMICPAPER')

    const { getByText } = render(<Activity />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const title = getByText('Envio de trabalho')
    const comments = getByText('Envio até amanha')
    const form = getByText('Arraste seu trabalho aqui!')

    expect(title).toBeInTheDocument()
    expect(comments).toBeInTheDocument()
    expect(form).toBeInTheDocument()
  })
  it('Should be render a activity page if is academic paper and is teacher', async () => {
    getActivityMock(200, 'ACADEMICPAPER')
    const { result } = renderHook(() => useAuthStore())

    act(() => {
      result.current.setUserState(mockUserTeacherState as any)
    })

    const { getByText, queryByText } = render(<Activity />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const title = getByText('Envio de trabalho')
    const comments = getByText('Envio até amanha')

    expect(title).toBeInTheDocument()
    expect(comments).toBeInTheDocument()
    expect(queryByText('Observações')).toBeNull()
  })
})
