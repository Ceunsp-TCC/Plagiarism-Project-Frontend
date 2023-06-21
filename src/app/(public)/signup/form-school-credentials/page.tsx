'use client'
import { Button, Input, ErrorMessage } from '@/components'
import { useFormSchoolCredentials } from '@/app/(public)/signup/hooks'
import { checkHasError } from '@/functions'
import type { FormSchoolCredentialsFields } from '@/app/(public)/signup/types'

export default function FormSchoolCredentials() {
  const { errors, handleSubmit, onSubmit, register, handleNavigate } =
    useFormSchoolCredentials()
  return (
    <form method="post">
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
              <Button onClick={handleSubmit(onSubmit)}>Confirmar</Button>
            </div>
            <div className="w-full p-2">
              <Button
                onClick={() => handleNavigate('/signup/form-school-address')}
                variant="secondary"
              >
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
