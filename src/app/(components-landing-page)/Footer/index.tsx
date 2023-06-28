import Image from 'next/image'
import { LinkFooter } from './components'
import * as S from './styles'

export function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.ContainerCard>
            <S.ContentCard>
              <S.ContainerLogo>
                <Image
                  width={50}
                  height={50}
                  src="/images/logo.png"
                  alt="logo-footer"
                />
              </S.ContainerLogo>
              <S.ContainerLinks>
                <S.ListLinks>
                  <S.LinkWrapper>
                    <LinkFooter href="#statistics">Estatísticas</LinkFooter>
                  </S.LinkWrapper>
                  <S.LinkWrapper>
                    <LinkFooter href="#feature">Funcionalidades</LinkFooter>
                  </S.LinkWrapper>
                  <S.LinkWrapper>
                    <LinkFooter href="#contact">Contate-nos</LinkFooter>
                  </S.LinkWrapper>
                </S.ListLinks>
              </S.ContainerLinks>
            </S.ContentCard>
          </S.ContainerCard>
        </S.Card>
        <S.Rights>
          <S.Copyright>Ⓒ Copyright. Todos direitos reservados por </S.Copyright>
          <S.RightsContentDetach>School Guardian</S.RightsContentDetach>
        </S.Rights>
      </S.Content>
    </S.Container>
  )
}
