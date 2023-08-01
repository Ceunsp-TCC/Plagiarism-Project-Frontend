'use client'
import { useRandomPasswordModal } from '@/components/Notifications/hooks'
import { Modal } from '@components'
import * as S from './styles'

export function RandomPasswordModal() {
  const {
    isOpenModalRandomPassword,
    title,
    description,
    buttonLabel,
    randomPassword,
    setCloseModalRandomPassword,
    onClickButton,
  } = useRandomPasswordModal()
  return (
    <Modal
      isOpen={isOpenModalRandomPassword}
      onClose={setCloseModalRandomPassword}
    >
      <S.Content>
        <S.SuccessIcon />
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.BoxRandomPassword>
          <S.RandomPasswordText>{randomPassword}</S.RandomPasswordText>
        </S.BoxRandomPassword>
        <S.ButtonWrapper>
          <S.ButtonCustom onClick={onClickButton}>{buttonLabel}</S.ButtonCustom>
        </S.ButtonWrapper>
      </S.Content>
    </Modal>
  )
}
