'use client'
import { usePermissions } from '@hooks'
import { useNewClass } from '@/app/(private)/school/courses/[id]/hooks'
import * as S from './styles'
import type { HeaderProps } from '@/app/(private)/school/courses/[id]/types'

export function Header({
  name = '',
  description = '',
  image = '',
}: HeaderProps) {
  const { handleOpenModal } = useNewClass()
  const { checkHasPermission } = usePermissions()
  return (
    <S.Card>
      <S.Content>
        <S.Image src={image} alt="course" />
        <S.ContainerNameAndDescription>
          <S.Name>{name}</S.Name>
          <S.Description>{description}</S.Description>
        </S.ContainerNameAndDescription>
      </S.Content>
      {checkHasPermission('createClass') && (
        <S.ContainerButtonNewClass>
          <S.ButtonWrapper>
            <S.ButtonCustom onClick={handleOpenModal}>
              Criar turma
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerButtonNewClass>
      )}
    </S.Card>
  )
}
