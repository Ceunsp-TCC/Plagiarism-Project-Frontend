'use client'
import { useQueryClient } from '@tanstack/react-query'
import type { NameAndDescriptionProps } from '@/app/(private)/school/courses/[id]/types'
import type { Course } from '@services'
import * as S from './styles'
export function NameAndDescription({
  name = '',
  description = '',
  image = '',
}: NameAndDescriptionProps) {
  return (
    <S.Card>
      <S.Content>
        <S.Image src={image} alt="course" />
        <S.ContainerNameAndDescription>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
        </S.ContainerNameAndDescription>
      </S.Content>
    </S.Card>
  )
}
