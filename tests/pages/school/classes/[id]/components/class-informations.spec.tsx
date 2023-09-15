import { ClassInformation } from '@/app/(private)/school/classes/[id]/components'
import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getOneClassMock } from '@tests/helpers'
import { act } from 'react-dom/test-utils'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
  notFound: jest.fn(),
}))
describe('ClassInformations', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render class informations', async () => {
    getOneClassMock(200)
    const { getByText, findByText, debug } = render(<ClassInformation />, {
      wrapper,
    })

    await findByText('Teste-clm6ygh610003c5npfqsida62-2023')
    const className = getByText('Teste-clm6ygh610003c5npfqsida62-2023')
    const accordionSemester = getByText('semestre test')
    expect(className).toBeVisible()

    act(() => {
      fireEvent.click(accordionSemester)
    })

    const accordionLesson = getByText('lesson test')

    expect(accordionLesson).toBeInTheDocument()
  })
})
