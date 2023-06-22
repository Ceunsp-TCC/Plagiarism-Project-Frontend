import WarningAccountInReview from '@/app/(public)/signup/warning-account-in-review/page'
import { render, waitFor, cleanup, renderHook } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import mockRouter from 'next-router-mock'
import { useSignupStore } from '@/store'

describe('WarningAccountInReview', () => {
  afterEach(cleanup)
  it('Should be render a warning account in review', async () => {
    const { getByText } = render(<WarningAccountInReview />)

    const description = getByText('Cadastro finalizado')
    const warningText = getByText(
      'Sua conta foi criada com sucesso e está em análise. Aprovação estimada em algumas horas. Agradecemos sua paciência e em breve você terá acesso completo à plataforma.',
    )
    const backButton = getByText('Entrar na conta')

    expect(warningText).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(backButton).toBeInTheDocument()
  })
  it('Should be click in back button and redirected to login', async () => {
    const { getByText } = render(<WarningAccountInReview />)
    mockRouter.push('/signup/warning-account-in-review')

    const backButton = getByText('Entrar na conta')

    act(() => {
      userEvent.click(backButton)
    })

    await waitFor(() => {
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/login')
    })
  })

  it('Should be redirect if step is wrong', async () => {
    const { result } = renderHook(() => useSignupStore())
    render(<WarningAccountInReview />)
    result.current.setStepState('FORMSCHOOL')
    mockRouter.push('/signup/warning-account-in-review')

    await waitFor(() => {
      const atualPath = mockRouter.asPath
      expect(atualPath).toBe('/signup/form-school')
    })
  })
})
