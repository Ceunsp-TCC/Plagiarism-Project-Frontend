'use client'
import {
  Modal,
  Input,
  InputLabel,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@components'
import { useNewPasswordModal } from '@/components/Modal/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'

export function NewPasswordModal() {
  const {
    errors,
    isLoading,
    title,
    description,
    buttonLabel,
    isOpenModalNewPassword,
    handleSubmit,
    onSubmit,
    register,
    onClose,
  } = useNewPasswordModal()

  return (
    <Modal isOpen={isOpenModalNewPassword} onClose={onClose}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Form method="post">
          <S.InputWrapper className="w-full">
            <Input
              {...register('password')}
              hasError={checkHasError(errors.password)}
              type="password"
              placeholder="Digite uma senha"
              minLength={8}
              label={() => <InputLabel>Senha</InputLabel>}
              errorMessage={() =>
                checkHasError(errors.password) && (
                  <ErrorMessage>{errors.password?.message}</ErrorMessage>
                )
              }
            />
          </S.InputWrapper>
          <S.InputWrapper className="w-full">
            <Input
              {...register('confirmPassword')}
              hasError={checkHasError(errors.confirmPassword)}
              type="password"
              label={() => <InputLabel>Confirme sua senha</InputLabel>}
              placeholder="Confirme sua senha"
              errorMessage={() =>
                checkHasError(errors.confirmPassword) && (
                  <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
                )
              }
            />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <S.ButtonCustom
              isLoading={isLoading}
              loading={() => <ButtonLoadingLottie />}
              onClick={handleSubmit(onSubmit)}
            >
              {buttonLabel}
            </S.ButtonCustom>
          </S.ButtonWrapper>
        </S.Form>
      </S.Content>
    </Modal>
  )
}
