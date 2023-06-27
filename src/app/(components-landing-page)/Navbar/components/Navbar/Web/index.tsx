import { LinkWebLandingPage } from '@/app/(components-landing-page)/Navbar/components'
import Image from 'next/image'
import * as S from './styles'

export function NavbarWeb() {
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.ContainerLogo>
            <Image width={50} height={50} src="/images/logo.png" alt="logo" />
          </S.ContainerLogo>
          <S.ContainerLinks>
            <S.WrapperLink>
              <LinkWebLandingPage href="#">Funcionalidades</LinkWebLandingPage>
            </S.WrapperLink>
            <S.WrapperLink>
              <LinkWebLandingPage href="#">Preços</LinkWebLandingPage>
            </S.WrapperLink>
            <>
              <LinkWebLandingPage href="#">Contate-nos</LinkWebLandingPage>
            </>
          </S.ContainerLinks>
          <S.ContainerButtons>
            <S.WrapperButton>
              <S.ButtonLanding variant="secondary">Entrar</S.ButtonLanding>
            </S.WrapperButton>
            <S.WrapperButton>
              <S.ButtonLanding className="text-base">
                Cadastrar-se
              </S.ButtonLanding>
            </S.WrapperButton>
          </S.ContainerButtons>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
