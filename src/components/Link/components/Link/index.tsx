import React from 'react'
import type { NextLinkProps } from '@/components/types'
import * as S from './styles'

export const LinkCustom: React.FC<NextLinkProps> = ({ href, children }) => {
  return <S.LinkCustom href={href}>{children}</S.LinkCustom>
}
