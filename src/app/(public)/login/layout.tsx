'use client'
import type { ReactNode } from 'react'
import { LinkCustom } from '@components'
import Image from 'next/image'
import Lottie from 'lottie-react'
import boy from '@public/animations-lottie/boy-studying.json'
import * as S from './layout-styles'

type LayoutLoginProps = {
  children: ReactNode
}

export default function LayoutLogin({ children }: LayoutLoginProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Card>
          <S.CardContent>
            <S.CardInside>
              <S.ContainerMasterLogo>
                <S.ContainerLogoLink>
                  <S.ContainerLogo>
                    <Image
                      width={100}
                      height={100}
                      src="/images/logo.png"
                      alt="logo"
                    />
                  </S.ContainerLogo>
                  <S.ContainerLink>
                    <LinkCustom href="/signup/form-school">
                      Crie sua conta
                    </LinkCustom>
                  </S.ContainerLink>
                </S.ContainerLogoLink>
                {children}
              </S.ContainerMasterLogo>
            </S.CardInside>
            <S.ContainerLottie>
              <S.ContentLottie>
                <S.SubContainerLottie>
                  <Lottie animationData={boy} width={400} height={400} />
                  <S.LottieTitle>Melhore suas correções!</S.LottieTitle>
                  <S.LottieDescription>
                    Promovendo a originalidade e o aprendizado autêntico,
                    oferecemos serviços especializados para verificar e
                    aprimorar trabalhos escolares, eliminando o plágio e
                    garantindo o sucesso acadêmico.
                  </S.LottieDescription>
                </S.SubContainerLottie>
              </S.ContentLottie>
            </S.ContainerLottie>
          </S.CardContent>
        </S.Card>
      </S.Content>
    </S.Container>
  )
}
