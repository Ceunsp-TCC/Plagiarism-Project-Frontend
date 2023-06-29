'use client'
import React from 'react'
import { Button, ButtonLoadingLottie, Input, InputLabel } from '@components'
import { useLogin } from '@/app/(public)/login/hooks'
import * as S from './styles'
import { checkHasError } from '@functions'

export default function Login() {
  const { errors, isLoading, handleSubmit, onSubmit, register } = useLogin()

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Title>Entre no School Guardian</S.Title>
        <S.Description>
          Torne-se parte do nosso mundo acadêmico. Faça login agora!
        </S.Description>
      </S.ContainerHeader>
      <S.Form>
        <S.ContainerForm>
          <S.InputWrapper>
            <Input
              {...register('email')}
              hasError={checkHasError(errors.email)}
              type="text"
              name="email"
              label={() => <InputLabel>Email</InputLabel>}
              placeholder="Insira seu endereço de email"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <Input
              {...register('password')}
              hasError={checkHasError(errors.password)}
              type="password"
              name="password"
              label={() => <InputLabel>Senha</InputLabel>}
              placeholder="*************"
            />
          </S.InputWrapper>
          <S.ButtonWrapper>
            <Button
              isLoading={isLoading}
              loading={() => <ButtonLoadingLottie />}
              onClick={handleSubmit(onSubmit)}
            >
              Entrar
            </Button>
          </S.ButtonWrapper>
        </S.ContainerForm>
      </S.Form>
    </S.Container>
  )
}
