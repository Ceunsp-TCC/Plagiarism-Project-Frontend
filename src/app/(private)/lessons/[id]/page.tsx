'use client'
import { usePermissions } from '@hooks'
import { useLessonStore } from '@store'
import { PageHeader } from '@components'
import { ModalNewActivity, Activities } from './components'
import * as S from './styles'

export default function Lesson() {
  const { checkHasPermission } = usePermissions()
  const { setIsOpenModalNewActivity } = useLessonStore()
  return (
    <>
      <PageHeader title="Aula" description="Veja detalhes da aula" />
      {checkHasPermission('createActivity') && (
        <S.ContainerNewActivity>
          <S.ButtonWrapper>
            <S.ButtonCustom onClick={() => setIsOpenModalNewActivity(true)}>
              Nova atividade
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerNewActivity>
      )}
      <ModalNewActivity />
      <Activities />
    </>
  )
}
