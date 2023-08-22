import Course from '@/app/(private)/school/courses/[id]/page'
import { fireEvent, render, renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import { useAuthStore } from '@store'
import { getCourseMock, mockUserSchoolState } from '@tests/helpers'
import { act } from 'react-dom/test-utils'

const queryClient = new QueryClient()
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}))
describe('Course', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('Should be render a course page', async () => {
    const { result } = renderHook(() => useAuthStore())
    act(() => {
      result.current.setUserState(mockUserSchoolState as any)
    })
    getCourseMock(200)
    const { getByText } = render(<Course />, {
      wrapper,
    })

    const loading = getByText('Carregando dados...')

    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const name = getByText('Animação Digital')
    const description = getByText(
      'A Animação Digital é uma das grandes áreas que envolvem a produção de Jogos Digitais. Saber animar um personagem ou uma cena em duas e/ou três dimensões é uma competência que todo desenvolvedor de jogos deve ter.A Animação Digital é uma das grandes áreas que envolvem a produção de Jogos Digitais. Saber animar um personagem ou uma cena em duas e/ou três dimensões é uma competência que todo desenvolvedor de jogos deve ter.',
    )
    const buttonNewSemester = getByText('Adicionar semestre')
    const accordionSemester = getByText('semestre test')
    expect(name).toBeVisible()
    expect(description).toBeVisible()
    expect(buttonNewSemester).toBeVisible()
    expect(accordionSemester).toBeVisible()

    act(() => {
      fireEvent.click(accordionSemester)
    })

    const buttonNewLesson = getByText('Adicionar aula')
    const accordionLesson = getByText('Ingles')

    expect(buttonNewLesson).toBeInTheDocument()
    expect(accordionLesson).toBeInTheDocument()
  })
})
