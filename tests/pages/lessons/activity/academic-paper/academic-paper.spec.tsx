import AcademicPaper from '@/app/(private)/lessons/activity/academic-paper/[id]/page'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
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
describe('Academic paper', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a activity paper without reports', async () => {
    getAcademicPaperByIdMock(200)

    const { getByText, getByRole } = render(<AcademicPaper />, {
      wrapper,
    })
    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const buttonAnalyseAcademicPaper = getByText('Analisar trabalho')
    const comments = getByText('Observações')
    const academicPaper = getByRole('academic-paper')

    expect(buttonAnalyseAcademicPaper).toBeInTheDocument()
    expect(comments).toBeInTheDocument()
    expect(academicPaper).toBeInTheDocument()
  })
})
