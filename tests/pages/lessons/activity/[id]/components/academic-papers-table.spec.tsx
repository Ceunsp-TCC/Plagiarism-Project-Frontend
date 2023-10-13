import { AcademicPapers } from '@/app/(private)/lessons/activity/[id]/components'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllAcademicPapersMock } from '@tests/helpers'
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
describe('AcademicPapersTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllAcademicPapersMock(200)
    const { getByText, getAllByText } = render(<AcademicPapers />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const rows = getAllByText('Diogo Nathan Julio Ribeiro')

    expect(rows).toHaveLength(5)
  })

  it('Should be not found academic papers', async () => {
    getAllAcademicPapersMock(404)
    const { getByText } = render(<AcademicPapers />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const notFoundText = getByText('Nenhum trabalho enviado')

    expect(notFoundText).toBeInTheDocument()
  })
})
