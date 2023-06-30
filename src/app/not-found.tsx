import * as S from './not-found-styles'
import { checkUserIsAuthenticated } from '@functions'
import Image from 'next/image'

export default function NotFound() {
  const urlBack = checkUserIsAuthenticated() ? '/home' : '/'

  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.CardContent>
            <S.ContainerInsideCard>
              <Image
                width={50}
                height={50}
                src="/images/logo.png"
                alt="logo"
                className="mb-32 md:mb-64 mx-auto"
              />

              <S.StatusCode>404</S.StatusCode>
              <S.Message>Pagina não encontrada</S.Message>
              <S.ContainerButton>
                <S.WrapperLink>
                  <S.CustomLink href={urlBack}>
                    Voltar para tela inicial
                  </S.CustomLink>
                </S.WrapperLink>
              </S.ContainerButton>
            </S.ContainerInsideCard>
          </S.CardContent>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
