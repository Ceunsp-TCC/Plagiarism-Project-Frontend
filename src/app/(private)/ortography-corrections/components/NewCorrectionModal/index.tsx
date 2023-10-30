'use client'
import {
  Modal,
  Input,
  InputLabel,
  InputFile,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@components'
import { useNewCorrection } from '@/app/(private)/ortography-corrections/hooks'
import { checkHasError } from '@functions'
import * as S from './styles'
import React from 'react'

export function NewCorrectionModal() {
  const {
    isModalNewCorrectionOpen,
    fileName,
    errors,
    isLoading,
    handleSubmit,
    onCloseModal,
    register,
    onSubmit,
  } = useNewCorrection()

  return (
    <Modal isOpen={isModalNewCorrectionOpen} onClose={onCloseModal}>
      <S.Container>
        <S.Title>Envie seu arquivo para correção</S.Title>
        <S.Form method="POST">
          <S.ContentForm>
            <S.InputWrapper className="col-span-3">
              <Input
                {...register('userProvidedIdentifier')}
                hasError={checkHasError(errors.userProvidedIdentifier)}
                label={() => <InputLabel>Digite um identificador</InputLabel>}
                placeholder="Digite o identificador para está correção"
                errorMessage={() =>
                  checkHasError(errors.userProvidedIdentifier) && (
                    <ErrorMessage>
                      {errors.userProvidedIdentifier?.message}
                    </ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>

            <S.InputWrapper className="col-span-3">
              <InputFile
                {...register('original')}
                label={() => (
                  <InputLabel>Coloque o arquivo a ser corrigido</InputLabel>
                )}
                placeholder="original"
                currentFile={fileName}
                specifications="PDF (MAX. 1MB)"
                hasError={checkHasError(errors.original)}
                errorMessage={() =>
                  checkHasError(errors.original) && (
                    <ErrorMessage>
                      {errors.original?.message?.toString()}
                    </ErrorMessage>
                  )
                }
              />
            </S.InputWrapper>
          </S.ContentForm>

          <S.ContainerButtons>
            <S.ButtonWrapper>
              <S.ButtonCustom
                isLoading={isLoading}
                loading={() => <ButtonLoadingLottie />}
                onClick={handleSubmit(onSubmit)}
              >
                Enviar
              </S.ButtonCustom>
            </S.ButtonWrapper>
          </S.ContainerButtons>
        </S.Form>
      </S.Container>
    </Modal>
  )
}
