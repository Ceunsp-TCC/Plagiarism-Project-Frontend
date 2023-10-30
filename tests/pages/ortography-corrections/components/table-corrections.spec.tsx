import { OrtographyCorrectionsTable } from '@/app/(private)/ortography-corrections/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getAllOrtographyCorrectionsMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'
import { useOrtographicCorrectionTableStore } from '@store'
import type { ReactNode } from 'react'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
  })),
}))
const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
describe('OrtographyCorrectionsTable', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a table', async () => {
    getAllOrtographyCorrectionsMock(200)
    const { getByText, getByPlaceholderText, getAllByText } = render(
      <OrtographyCorrectionsTable />,
      {
        wrapper,
      },
    )

    const filter = getByPlaceholderText('Digite o identificador')
    const loading = getByText('Carregando dados...')

    expect(filter).toBeInTheDocument()

    await waitFor(() => expect(loading).not.toBeInTheDocument())

    const rows = getAllByText('Ver resultado')

    expect(rows).toHaveLength(11)
  })
  it('Should be not found correction', async () => {
    getAllOrtographyCorrectionsMock(404)
    const { getByText } = render(<OrtographyCorrectionsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const notFoundText = getByText('Nenhuma correção encontrada')

    expect(notFoundText).toBeInTheDocument()
  })
  it('Should be filter by identifier', async () => {
    getAllOrtographyCorrectionsMock(200)
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())

    const { getByText, getByPlaceholderText } = render(
      <OrtographyCorrectionsTable />,
      {
        wrapper,
      },
    )
    const filter = getByPlaceholderText('Digite o identificador')
    const loading = getByText('Carregando dados...')

    act(() => {
      fireEvent.change(filter, {
        target: { value: 'test filter' },
      })
    })
    await waitFor(() => expect(loading).not.toBeInTheDocument())

    expect(result.current.filters.identifier).toBe('test filter')
  })
  it('Should be pagination work', async () => {
    getAllOrtographyCorrectionsMock(200)
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())

    const { getByText } = render(<OrtographyCorrectionsTable />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const buttonNextPagination = getByText('Próximo')
    act(() => {
      fireEvent.click(buttonNextPagination)
    })

    expect(result.current.currentPage).toBe(2)
  })
})
