'use client'
import { useRef, useEffect } from 'react'
import Lottie from 'lottie-react'
import type { LottieRefCurrentProps } from 'lottie-react'
import book from '@public/animations-lottie/book-loading.json'
import * as S from './styles'

export function SectionLoading() {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2)
    }
  }, [])
  return (
    <S.Container>
      <Lottie
        className="w-full h-full"
        animationData={book}
        lottieRef={lottieRef}
      />
      <S.Text>Carregando dados...</S.Text>
    </S.Container>
  )
}
