'use client'
import {
  Modal,
  Input,
  InputMask,
  InputLabel,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@components'
import { useNewStudent } from '@/app/(private)/students/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'

export function ModalNewStudent() {
  const {
    isOpenModalNewStudent,
    errors,
    isSubmitting,
    isLoading,
    onCloseModal,
    handleSubmit,
    onSubmit,
    register,
  } = useNewStudent()
  return (
    <Modal isOpen={isOpenModalNewStudent} onClose={onCloseModal}>
      <S.Container>
        <S.Title>Registre seu aluno</S.Title>
        <S.Form method="POST">
          <S.ContentForm>
            <S.InputWrapper className="w-80">
              <Input
                {...register('name')}
                hasError={checkHasError(errors.name)}
                label={() => <InputLabel>Nome</InputLabel>}
                placeholder="Digite o nome do aluno"
                errorMessage={() =>
                  checkHasError(errors.name) && (
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-80">
              <Input
                {...register('email')}
                hasError={checkHasError(errors.email)}
                label={() => <InputLabel>Email</InputLabel>}
                placeholder="Digite o email do aluno"
                errorMessage={() =>
                  checkHasError(errors.email) && (
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-80">
              <InputMask
                {...register('CPF')}
                mask="999.999.999-99"
                hasError={checkHasError(errors.CPF)}
                label={() => <InputLabel>CPF</InputLabel>}
                placeholder="999.999.999-99"
                errorMessage={() =>
                  checkHasError(errors.CPF) && (
                    <ErrorMessage>{errors.CPF?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
            <S.InputWrapper className="w-80">
              <InputMask
                {...register('phoneNumber')}
                mask="(99) 99999-9999"
                hasError={checkHasError(errors.phoneNumber)}
                label={() => <InputLabel>Celular</InputLabel>}
                placeholder="(99) 99999-9999"
                errorMessage={() =>
                  checkHasError(errors.phoneNumber) && (
                    <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
          </S.ContentForm>

          <S.ContainerButtons>
            <S.ButtonWrapper>
              <S.ButtonCustom
                isLoading={isSubmitting || isLoading}
                loading={() => <ButtonLoadingLottie />}
                onClick={handleSubmit(onSubmit)}
              >
                Salvar
              </S.ButtonCustom>
            </S.ButtonWrapper>
          </S.ContainerButtons>
        </S.Form>
      </S.Container>
    </Modal>
  )
}
