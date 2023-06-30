import { Statistics } from '@/app/(components-landing-page)'
import { render } from '@testing-library/react'
import React from 'react'

describe('Statistics landing page', () => {
  it('Should be render a statistics', () => {
    const { getByText } = render(<Statistics />)

    const title = getByText('Resultados que Impressionam')
    const description = getByText(
      'Resultados comprovados: detecção precisa de plágio. Confie em nós para preservar a integridade acadêmica.',
    )
    const percentagePlagiarism = getByText('95%')
    const subTitlePercentagePlagiarism = getByText('Taxa de Detecção de Plágio')
    const descriptionPercentagePlagiarism = getByText(
      'Detectamos plágio com precisão. Sua confiança na integridade acadêmica é nossa prioridade.',
    )
    const percentageOrthography = getByText('98%')
    const subTitlePercentageOrthography = getByText(
      'Taxa de Correção Ortográfica',
    )
    const descriptionPercentageOrthography = getByText(
      'Facilitamos a correção ortográfica dos trabalhos acadêmicos.',
    )

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(percentagePlagiarism).toBeInTheDocument()
    expect(subTitlePercentagePlagiarism).toBeInTheDocument()
    expect(descriptionPercentagePlagiarism).toBeInTheDocument()
    expect(percentageOrthography).toBeInTheDocument()
    expect(subTitlePercentageOrthography).toBeInTheDocument()
    expect(descriptionPercentageOrthography).toBeInTheDocument()
  })
})
