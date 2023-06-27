import type { LinkProps } from '@/app/(components-landing-page)/types'
import * as S from './styles'

export function LinkMobileLandingPage({ href, children, onClick }: LinkProps) {
  return (
    <S.LinkMobileLandingPage onClick={onClick} href={href}>
      {children}
    </S.LinkMobileLandingPage>
  )
}
