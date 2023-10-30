import OrtographyCorrection from '@/app/(private)/ortography-corrections/[id]/page'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getOrtographyCorretionMock } from '@tests/helpers'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('OrtographyCorrection', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a page', async () => {
    getOrtographyCorretionMock(200)
    const { getByText, getByRole } = render(<OrtographyCorrection />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const identifier = getByText('teste')
    const originalButton = getByText('Original')
    const resultButton = getByText('Resultado')
    const file = getByRole('file')

    expect(identifier).toBeInTheDocument()
    expect(originalButton).toBeInTheDocument()
    expect(resultButton).toBeInTheDocument()
    expect(file).toBeInTheDocument()
  })
})
