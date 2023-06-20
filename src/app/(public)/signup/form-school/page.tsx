'use client'
import { Button, Input, InputMask, ErrorMessage } from '@/components'
import { useFormSchool } from '@/app/(public)/signup/hooks'
import type { FormSchoolFields } from '@/app/(public)/signup/types'
import { checkHasError } from '@/functions'

export default function FormSchoolAddress() {
  const { errors, handleSubmit, onSubmit, register, handleNavigate } =
    useFormSchool()
  return (
    <form method="post">
      <div className="flex flex-wrap -m-3">
        <div className="w-full p-3">
          <Input<FormSchoolFields>
            register={register}
            hasError={checkHasError(errors.name)}
            type="text"
            maxLength={255}
            placeholder="Nome"
            name="name"
            errorMessage={() =>
              checkHasError(errors.name) && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full p-3">
          <Input<FormSchoolFields>
            register={register}
            hasError={checkHasError(errors.email)}
            type="text"
            placeholder="Email"
            maxLength={255}
            name="email"
            errorMessage={() =>
              checkHasError(errors.email) && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full p-3">
          <InputMask<FormSchoolFields>
            register={register}
            hasError={checkHasError(errors.phoneNumber)}
            type="text"
            placeholder="Número de telefone"
            mask="(99) 99999-9999"
            name="phoneNumber"
            errorMessage={() =>
              checkHasError(errors.phoneNumber) && (
                <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full p-3">
          <InputMask<FormSchoolFields>
            mask="99.999.999/9999-99"
            register={register}
            hasError={checkHasError(errors.CNPJ)}
            type="text"
            placeholder="CNPJ"
            name="CNPJ"
            errorMessage={() =>
              checkHasError(errors.CNPJ) && (
                <ErrorMessage>{errors.CNPJ?.message}</ErrorMessage>
              )
            }
          />
        </div>

        <div className="w-full p-3">
          <div className="flex flex-wrap md:justify-end -m-2">
            <div className="w-full p-2">
              <Button onClick={handleSubmit(onSubmit)}>Avançar</Button>
            </div>
            <div className="w-full p-2">
              <Button onClick={() => handleNavigate('/')} variant="secondary">
                Voltar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
