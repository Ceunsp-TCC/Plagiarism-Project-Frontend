import { Activities } from '@/app/(private)/lessons/[id]/components'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllActivitiesMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('Activities', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllActivitiesMock(200)
    const { getByText, getAllByText } = render(<Activities />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const title = getByText('Atividades')
    const rows = getAllByText('Envio de trabalho')

    expect(title).toBeInTheDocument()
    expect(rows).toHaveLength(4)
  })
})
