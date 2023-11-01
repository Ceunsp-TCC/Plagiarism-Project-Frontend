'use client'
import { Modal, ButtonLoadingLottie } from '@components'

import * as S from './styles'

export function AvaliationModal() {
  return (
    <Modal isOpen={true} onClose={() => console.log('oi')}>
      <S.Container>
        <S.Title>Registre sua atividade</S.Title>
        <p>button</p>
        <S.ContainerButtons>
          <S.ButtonWrapper>
            <S.ButtonCustom
              //   isLoading={isLoading}
              loading={() => <ButtonLoadingLottie />}
              //   onClick={handleSubmit(onSubmit)}
            >
              Salvar
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.ContainerButtons>
      </S.Container>
    </Modal>
  )
}
