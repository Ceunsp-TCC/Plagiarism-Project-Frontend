'use client'
import { useQueryClient } from '@tanstack/react-query'
import * as S from './styles'
import type { Course } from '@services'

export function NameAndDescription() {
  const queryClient = useQueryClient()
  const course = queryClient.getQueryData(['course']) as Course

  return (
    <S.Card>
      <S.Content>
        <S.Image src={course.image} alt="course" />
        <S.ContainerNameAndDescription>
          <S.Name>{course.name}</S.Name>
          <S.Description>
            A Animação Digital é uma das grandes áreas que envolvem a produção
            de Jogos Digitais. Saber animar um personagem ou uma cena em duas
            e/ou três dimensões é uma competência que todo desenvolvedor de
            jogos deve ter.A Animação Digital é uma das grandes áreas que
            envolvem a produção de Jogos Digitais. Saber animar um personagem ou
            uma cena em duas e/ou três dimensões é uma competência que todo
            desenvolvedor de jogos deve ter.
          </S.Description>
        </S.ContainerNameAndDescription>
      </S.Content>
    </S.Card>
  )
}
