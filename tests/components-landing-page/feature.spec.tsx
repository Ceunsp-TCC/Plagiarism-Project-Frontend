import { Feature } from '@/app/(components-landing-page)'
import { render } from '@testing-library/react'
import React from 'react'

describe('Feature landing page', () => {
  it('Should be render a feature', () => {
    const { getByText, getByAltText } = render(<Feature />)

    const image = getByAltText('school')
    const caption = getByText('Funcionalidades')
    const textInDetachTitle = getByText('Gerencie sua escola')
    const commonTextInTitle = getByText('facilmente!')
    const description = getByText(
      'Funcionalidades poderosas para o seu sucesso acadêmico.',
    )
    const cardFuncionalityPlagiarism = getByText('Verificação de plágio')
    const cardFuncionalitySpellCheck = getByText('Correção ortográfica')
    const cardFuncionalityReadability = getByText('Legibilidade')
    const cardFuncionalityFinance = getByText('Financeiro')
    const cardFuncionalityOnlineClass = getByText('Aulas online')

    expect(image).toBeInTheDocument()
    expect(caption).toBeInTheDocument()
    expect(textInDetachTitle).toBeInTheDocument()
    expect(commonTextInTitle).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(cardFuncionalityPlagiarism).toBeInTheDocument()
    expect(cardFuncionalitySpellCheck).toBeInTheDocument()
    expect(cardFuncionalityReadability).toBeInTheDocument()
    expect(cardFuncionalityFinance).toBeInTheDocument()
    expect(cardFuncionalityOnlineClass).toBeInTheDocument()
  })
})
