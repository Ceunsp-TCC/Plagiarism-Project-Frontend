'use client'
import { PageHeader } from '@components'
import { CoursesTable, ModalNewCourse } from './components'
import { usePermissions } from '@hooks'
import { useCoursesStore } from '@store'
import * as S from './styles'

export default function Courses() {
  const { checkHasPermission } = usePermissions()
  const { setIsOpenModalNewCourse } = useCoursesStore()
  return (
    <>
      <PageHeader title="Cursos" description="Crie e gerencie seus cursos" />
      {checkHasPermission('createCourse') && (
        <S.ContainerNewCourse>
          <S.ButtonWrapper>
            <S.ButtonCustom onClick={() => setIsOpenModalNewCourse(true)}>
              Novo
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerNewCourse>
      )}
      <CoursesTable />
      <ModalNewCourse />
    </>
  )
}
