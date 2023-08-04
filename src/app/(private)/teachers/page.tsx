'use client'
import { PageHeader } from '@components'
import { ModalNewTeacher, TeachersTable } from './components'
import { useTeachersStore } from '@store'
import * as S from './styles'

export default function Teachers() {
  const { setIsOpenModalNewTeacher } = useTeachersStore()
  return (
    <>
      <PageHeader title="Professores" description="Gerencie seus professores" />
      <S.ContainerNewTeacher>
        <S.ButtonWrapper>
          <S.ButtonCustom onClick={() => setIsOpenModalNewTeacher(true)}>
            Novo
          </S.ButtonCustom>
        </S.ButtonWrapper>
      </S.ContainerNewTeacher>
      <TeachersTable />
      <ModalNewTeacher />
    </>
  )
}
