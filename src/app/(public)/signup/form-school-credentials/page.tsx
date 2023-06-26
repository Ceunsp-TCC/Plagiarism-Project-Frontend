'use client'
import { Button, ButtonLoadingLottie, Input, ErrorMessage } from '@/components'
import { useFormSchoolCredentials } from '@/app/(public)/signup/hooks'
import { checkHasError } from '@/functions'
import type { FormSchoolCredentialsFields } from '@/app/(public)/signup/types'

export default function FormSchoolCredentials() {
  const { errors, isLoading, handleSubmit, onSubmit, register } =
    useFormSchoolCredentials()

  return (
    <form method="post">
      <div className="mb-10">
        <p className="text-gray-500 font-bold">
          Agora preencha uma senha de acesso
        </p>
      </div>
      <div className="flex flex-wrap -m-3">
        <div className="w-full p-3">
          <Input<FormSchoolCredentialsFields>
            register={register}
            hasError={checkHasError(errors.password)}
            type="password"
            placeholder="Digite uma senha"
            minLength={8}
            name="password"
            errorMessage={() =>
              checkHasError(errors.password) && (
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full p-3">
          <Input<FormSchoolCredentialsFields>
            register={register}
            hasError={checkHasError(errors.confirmPassword)}
            type="password"
            placeholder="Confirme sua senha"
            name="confirmPassword"
            errorMessage={() =>
              checkHasError(errors.confirmPassword) && (
                <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full p-3">
          <div className="flex flex-wrap md:justify-end -m-2">
            <div className="w-full p-2">
              <Button
                loading={() => <ButtonLoadingLottie />}
                isLoading={isLoading}
                onClick={handleSubmit(onSubmit)}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
