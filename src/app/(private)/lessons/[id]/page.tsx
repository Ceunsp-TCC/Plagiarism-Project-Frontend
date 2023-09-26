'use client'
import { usePermissions } from '@hooks'
import { useLessonStore } from '@store'
import { ModalNewActivity } from './components'
import * as S from './styles'

export default function Lesson() {
  const { checkHasPermission } = usePermissions()
  const { setIsOpenModalNewActivity } = useLessonStore()
  return (
    <>
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
    </>
  )
}
