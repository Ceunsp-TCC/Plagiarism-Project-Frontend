import { ModalNewCourse } from '@/app/(private)/school/courses/components'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import { useCoursesStore } from '@store'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainerCustom } from '@components'
import { act } from 'react-dom/test-utils'
import { createCourseMock } from '@tests/helpers'
import { faker } from '@faker-js/faker'
import type { ReactNode } from 'react'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ToastContainerCustom />
    {children}
  </QueryClientProvider>
)
describe('ModalNewCourse', () => {
  const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
  it('Should be render a modal new course', async () => {
    const { result } = renderHook(() => useCoursesStore())
    act(() => {
      result.current.setIsOpenModalNewCourse(true)
    })
    const { getByText } = render(<ModalNewCourse />, {
      wrapper,
    })

    const title = getByText('Registre seu curso')
    const inputName = getByText('Nome')
    const inputDescription = getByText('Descrição')
    const inputModality = getByText('Modalidade')
    const inputCategory = getByText('Categoria')
    const inputPrice = getByText('Mensalidade')
    const inputImage = getByText('Clique para fazer upload')
    const buttonSave = getByText('Salvar')

    expect(title).toBeInTheDocument()
    expect(inputName).toBeInTheDocument()
    expect(inputDescription).toBeInTheDocument()
    expect(inputModality).toBeInTheDocument()
    expect(inputCategory).toBeInTheDocument()
    expect(inputPrice).toBeInTheDocument()
    expect(inputImage).toBeInTheDocument()
    expect(buttonSave).toBeInTheDocument()
  })
  it('Should be validation fields', async () => {
    const { result } = renderHook(() => useCoursesStore())
    act(() => {
      result.current.setIsOpenModalNewCourse(true)
    })
    const { getByText } = render(<ModalNewCourse />, {
      wrapper,
    })

    const buttonSave = getByText('Salvar')

    act(() => {
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageName = getByText('Insira um nome válido')
      const errorMessageModality = getByText('Insira uma modalidade válida')
      const errorMessageCategory = getByText('Insira uma categoria válida')
      const errorMessagePrice = getByText('Valor minímo R$ 0,01')
      const errorMessageImage = getByText('Imagem inválida')

      expect(errorMessageName).toBeInTheDocument()
      expect(errorMessageModality).toBeInTheDocument()
      expect(errorMessageCategory).toBeInTheDocument()
      expect(errorMessagePrice).toBeInTheDocument()
      expect(errorMessageImage).toBeInTheDocument()
    })
  })
  it('Should be create course', async () => {
    createCourseMock(200)
    const { result } = renderHook(() => useCoursesStore())
    act(() => {
      result.current.setIsOpenModalNewCourse(true)
    })

    const { getByText, getByPlaceholderText, findByText } = render(
      <ModalNewCourse />,
      {
        wrapper,
      },
    )

    const title = getByText('Registre seu curso')
    const inputName = getByPlaceholderText('Digite o nome do curso')
    const inputDescription = getByPlaceholderText(
      'Digite uma descrição para seu curso',
    )
    const inputModality = getByPlaceholderText('Modalidade')
    const inputCategory = getByPlaceholderText('Categoria')
    const inputPrice = getByPlaceholderText('R$ 00,00')
    const inputImage = getByPlaceholderText('image')
    const buttonSave = getByText('Salvar')

    await act(async () => {
      fireEvent.change(inputName, {
        target: { value: faker.person.fullName() },
      })
      fireEvent.change(inputDescription, {
        target: { value: faker.person.fullName() },
      })
      fireEvent.change(inputModality, {
        target: { value: 'INPERSON' },
      })
      fireEvent.change(inputCategory, {
        target: { value: 'SOCIALSCIENCES' },
      })

      fireEvent.change(inputPrice, {
        target: { value: '23' },
      })
      await waitFor(() =>
        fireEvent.change(inputImage, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSave)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText('Curso registrado com sucesso!')

      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be create course with name already exists', async () => {
    createCourseMock(422)
    const { result } = renderHook(() => useCoursesStore())
    act(() => {
      result.current.setIsOpenModalNewCourse(true)
    })

    const { getByText, getByPlaceholderText, findByText } = render(
      <ModalNewCourse />,
      {
        wrapper,
      },
    )

    const title = getByText('Registre seu curso')
    const inputName = getByPlaceholderText('Digite o nome do curso')
    const inputDescription = getByPlaceholderText(
      'Digite uma descrição para seu curso',
    )
    const inputModality = getByPlaceholderText('Modalidade')
    const inputCategory = getByPlaceholderText('Categoria')
    const inputPrice = getByPlaceholderText('R$ 00,00')
    const inputImage = getByPlaceholderText('image')
    const buttonSave = getByText('Salvar')

    await act(async () => {
      fireEvent.change(inputName, {
        target: { value: faker.person.fullName() },
      })
      fireEvent.change(inputDescription, {
        target: { value: faker.person.fullName() },
      })
      fireEvent.change(inputModality, {
        target: { value: 'INPERSON' },
      })
      fireEvent.change(inputCategory, {
        target: { value: 'SOCIALSCIENCES' },
      })

      fireEvent.change(inputPrice, {
        target: { value: '23' },
      })
      await waitFor(() =>
        fireEvent.change(inputImage, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSave)
    })

    await waitFor(async () => {
      expect(title).not.toBeInTheDocument()
      const toast = await findByText(
        'Já existe um curso com este nome. Por favor, escolha um nome diferente.',
      )

      expect(toast).toBeInTheDocument()
    })
  })
  it('Should be image size is very big and return error', async () => {
    const { result } = renderHook(() => useCoursesStore())
    Object.defineProperty(file, 'size', { value: 5000000 })
    act(() => {
      result.current.setIsOpenModalNewCourse(true)
    })

    const { getByText, getByPlaceholderText, debug } = render(
      <ModalNewCourse />,
      {
        wrapper,
      },
    )

    const inputImage = getByPlaceholderText('image')
    const buttonSave = getByText('Salvar')

    await act(async () => {
      await waitFor(() =>
        fireEvent.change(inputImage, {
          target: { files: [file] },
        }),
      )
      fireEvent.click(buttonSave)
    })

    await waitFor(() => {
      const errorMessageImage = getByText('Tamanho máximo de 5MB')

      expect(errorMessageImage).toBeInTheDocument()
    })
  })
})
