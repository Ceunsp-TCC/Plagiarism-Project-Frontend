import { NewCorrectionModal } from '@/app/(private)/ortography-corrections/components'
import {
  fireEvent,
  getByPlaceholderText,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react'
import { useOrtographicCorrectionTableStore } from '@store'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { createCorretionMock } from '@tests/helpers'
import { faker } from '@faker-js/faker'

import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('NewCorrectionModal', () => {
  const file = new File(['test'], 'test.pdf', { type: 'application/pdf' })
  it('Should be render a modal new course', async () => {
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())
    act(() => {
      result.current.setOpenModalNewCorrection(true)
    })
    const { getByText, getByPlaceholderText } = render(<NewCorrectionModal />, {
      wrapper,
    })

    const title = getByText('Envie seu arquivo para correção')
    const inputIdentifier = getByPlaceholderText(
      'Digite o identificador para está correção',
    )
    const inputFile = getByPlaceholderText('original')
    const buttonSend = getByText('Enviar')

    expect(title).toBeInTheDocument()
    expect(inputIdentifier).toBeInTheDocument()
    expect(inputFile).toBeInTheDocument()
    expect(buttonSend).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())
    act(() => {
      result.current.setOpenModalNewCorrection(true)
    })
    const { getByText } = render(<NewCorrectionModal />, {
      wrapper,
    })

    const buttonSend = getByText('Enviar')

    act(() => {
      fireEvent.click(buttonSend)
    })

    await waitFor(() => {
      const errorMessageIdentifier = getByText('Insira um identificador válido')
      const errorMessageFile = getByText('Arquivo inválido')

      expect(errorMessageIdentifier).toBeInTheDocument()
      expect(errorMessageFile).toBeInTheDocument()
    })
  })
  it('Should be create new correction', async () => {
    createCorretionMock(
      201,
      'Your file has been submitted for spelling correction',
    )
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())
    act(() => {
      result.current.setOpenModalNewCorrection(true)
    })
    const { getByText, getByPlaceholderText, findByText } = render(
      <NewCorrectionModal />,
      {
        wrapper,
      },
    )

    const title = getByText('Envie seu arquivo para correção')
    const inputIdentifier = getByPlaceholderText(
      'Digite o identificador para está correção',
    )
    const inputFile = getByPlaceholderText('original')
    const buttonSend = getByText('Enviar')

    await act(async () => {
      fireEvent.change(inputIdentifier, {
        target: { value: faker.person.fullName() },
      })
      await waitFor(() =>
        fireEvent.change(inputFile, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSend)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText('Arquivo enviado com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be create correction with identifier already exists', async () => {
    createCorretionMock(
      400,
      'Ortography correction with this identifier already registered',
    )

    const { result } = renderHook(() => useOrtographicCorrectionTableStore())
    act(() => {
      result.current.setOpenModalNewCorrection(true)
    })
    const { getByText, getByPlaceholderText, findByText } = render(
      <NewCorrectionModal />,
      {
        wrapper,
      },
    )

    const title = getByText('Envie seu arquivo para correção')
    const inputIdentifier = getByPlaceholderText(
      'Digite o identificador para está correção',
    )
    const inputFile = getByPlaceholderText('original')
    const buttonSend = getByText('Enviar')

    await act(async () => {
      fireEvent.change(inputIdentifier, {
        target: { value: faker.person.fullName() },
      })
      await waitFor(() =>
        fireEvent.change(inputFile, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSend)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText(
        'Já existe um identificador como este, digite outro por favor!',
      )

      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be is invalid language', async () => {
    createCorretionMock(400, 'Invalid language')

    const { result } = renderHook(() => useOrtographicCorrectionTableStore())
    act(() => {
      result.current.setOpenModalNewCorrection(true)
    })
    const { getByText, getByPlaceholderText, findByText } = render(
      <NewCorrectionModal />,
      {
        wrapper,
      },
    )

    const title = getByText('Envie seu arquivo para correção')
    const inputIdentifier = getByPlaceholderText(
      'Digite o identificador para está correção',
    )
    const inputFile = getByPlaceholderText('original')
    const buttonSend = getByText('Enviar')

    await act(async () => {
      fireEvent.change(inputIdentifier, {
        target: { value: faker.person.fullName() },
      })
      await waitFor(() =>
        fireEvent.change(inputFile, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSend)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText(
        'No momento só aceitamos textos na língua inglesa, em breve aceitaremos na língua portuguesa!',
      )

      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be file size is very big and return error', async () => {
    Object.defineProperty(file, 'size', { value: 5000000 })
    const { result } = renderHook(() => useOrtographicCorrectionTableStore())
    act(() => {
      result.current.setOpenModalNewCorrection(true)
    })
    const { getByText, getByPlaceholderText } = render(<NewCorrectionModal />, {
      wrapper,
    })

    const inputFile = getByPlaceholderText('original')
    const buttonSend = getByText('Enviar')

    await act(async () => {
      await waitFor(() =>
        fireEvent.change(inputFile, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSend)
    })

    await waitFor(() => {
      const errorMessageFile = getByText('Tamanho máximo de 1MB')

      expect(errorMessageFile).toBeInTheDocument()
    })
  })
})
