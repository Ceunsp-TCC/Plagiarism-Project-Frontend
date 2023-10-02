import Activity from '@/app/(private)/lessons/activity/[id]/page'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { act } from 'react-dom/test-utils'
import { getActivityMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('Activity', () => {
  it('Should be render a activity page', async () => {
    getActivityMock(200, 'ACADEMICPAPER')

    const { getByText } = render(<Activity />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const title = getByText('Envio de trabalho')
    const comments = getByText('Envio até amanha')

    expect(title).toBeInTheDocument()
    expect(comments).toBeInTheDocument()
  })
})
