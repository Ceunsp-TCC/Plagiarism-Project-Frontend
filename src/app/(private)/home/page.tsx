'use client'
import { useAuthStore } from '@store'
import * as S from './styles'

export default function Home() {
  const { data } = useAuthStore()
  return (
    <S.Container>
      <S.Message>
        Bem vindo ao School Guardian <S.Name>{data.user.name}</S.Name>
      </S.Message>
    </S.Container>
  )
}
