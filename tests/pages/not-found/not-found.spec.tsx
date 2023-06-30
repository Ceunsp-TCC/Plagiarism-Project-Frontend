import { render } from '@testing-library/react'
import NotFound from '@/app/not-found'

describe('NotFound', () => {
  it('Should be render not found', async () => {
    const { getByText, getByAltText } = render(<NotFound />)

    const logo = getByAltText('logo')
    const status = getByText('404')
    const message = getByText('Pagina não encontrada')
    const buttonBack = getByText('Voltar para tela inicial')

    expect(logo).toBeInTheDocument()
    expect(status).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(buttonBack).toBeInTheDocument()
  })
})
