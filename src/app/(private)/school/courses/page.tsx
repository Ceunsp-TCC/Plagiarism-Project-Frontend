'use client'
import { PageHeader } from '@components'
import { CoursesTable } from './components'
import { usePermissions } from '@/hooks'
import * as S from './styles'

export default function Courses() {
  const { checkHasPermission } = usePermissions()
  return (
    <>
      <PageHeader title="Cursos" description="Crie e gerencie seus cursos" />
      {checkHasPermission('createCourse') && (
        <S.ContainerNewCourse>
          <S.ButtonWrapper>
            <S.ButtonCustom>Novo</S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerNewCourse>
      )}
      <CoursesTable />
    </>
  )
}
