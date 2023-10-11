import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { sendAcademicPaperMock } from '@tests/helpers'
import { SendAcademicPaperForm } from '@/app/(private)/lessons/activity/[id]/components'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
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
describe('SendAcademicPaperForm', () => {
  const file = new File(['test'], 'test.pdf', { type: 'application/pdf' })
  it('Should be render a send academic form', async () => {
    const { getByText } = render(<SendAcademicPaperForm />, {
      wrapper,
    })

    const inputPaper = getByText('Clique para fazer upload')
    const inputComments = getByText('Observações')
    const buttonSend = getByText('Enviar')

    expect(inputComments).toBeInTheDocument()
    expect(inputPaper).toBeInTheDocument()
    expect(buttonSend).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    const { getByText } = render(<SendAcademicPaperForm />, {
      wrapper,
    })

    const buttonSend = getByText('Enviar')

    act(() => {
      fireEvent.click(buttonSend)
    })

    await waitFor(() => {
      const errorMessagePaper = getByText('Trabalho inválido')

      expect(errorMessagePaper).toBeInTheDocument()
    })
  })
  it('Should be send academic paper', async () => {
    sendAcademicPaperMock(200)

    const { getByText, getByPlaceholderText, findByText } = render(
      <SendAcademicPaperForm />,
      {
        wrapper,
      },
    )
    const inputPaper = getByPlaceholderText('trabalho')
    const inputComments = getByPlaceholderText(
      'Se precisar digite uma observação',
    )

    const buttonSend = getByText('Enviar')

    await act(async () => {
      fireEvent.change(inputComments, {
        target: { value: 'test' },
      })

      await waitFor(() =>
        fireEvent.change(inputPaper, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSend)
    })

    await waitFor(async () => {
      const toast = await findByText('Trabalho enviado com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })

  it('Should be paper size is very big and return error', async () => {
    Object.defineProperty(file, 'size', { value: 5000000 })

    const { getByText, getByPlaceholderText, debug } = render(
      <SendAcademicPaperForm />,
      {
        wrapper,
      },
    )

    const inputPaper = getByPlaceholderText('trabalho')
    const buttonSend = getByText('Enviar')

    await act(async () => {
      await waitFor(() =>
        fireEvent.change(inputPaper, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSend)
    })

    await waitFor(() => {
      const errorMessageImage = getByText('Tamanho máximo de 1MB')

      expect(errorMessageImage).toBeInTheDocument()
    })
  })
})
