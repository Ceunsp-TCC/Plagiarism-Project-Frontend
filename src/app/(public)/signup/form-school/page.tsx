'use client'
import {
  Button,
  Input,
  InputLabel,
  InputMask,
  ErrorMessage,
  ButtonLoadingLottie,
} from '@/components'
import { useFormSchool } from '@/app/(public)/signup/hooks'
import { checkHasError } from '@/functions'

export default function FormSchoolAddress() {
  const { errors, isSubmitting, handleSubmit, onSubmit, register } =
    useFormSchool()

  return (
    <form method="post">
      <div className="mb-10">
        <p className="text-gray-500 font-bold">
          Primeiro precisamos de algumas informações da sua escola
        </p>
      </div>
      <div className="flex flex-wrap -m-3">
        <div className="w-full  px-3 mb-3">
          <Input
            {...register('name')}
            hasError={checkHasError(errors.name)}
            type="text"
            maxLength={255}
            placeholder="Nome"
            label={() => <InputLabel>Nome</InputLabel>}
            name="name"
            errorMessage={() =>
              checkHasError(errors.name) && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full px-3  mb-3">
          <Input
            {...register('email')}
            hasError={checkHasError(errors.email)}
            type="text"
            placeholder="Email"
            maxLength={255}
            label={() => <InputLabel>Email</InputLabel>}
            name="email"
            errorMessage={() =>
              checkHasError(errors.email) && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full px-3  mb-3">
          <InputMask
            {...register('phoneNumber')}
            hasError={checkHasError(errors.phoneNumber)}
            type="text"
            placeholder="Número de telefone"
            mask="(99) 99999-9999"
            name="phoneNumber"
            label={() => <InputLabel>Número de Telefone</InputLabel>}
            errorMessage={() =>
              checkHasError(errors.phoneNumber) && (
                <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full px-3  mb-3">
          <InputMask
            {...register('CNPJ')}
            mask="99.999.999/9999-99"
            hasError={checkHasError(errors.CNPJ)}
            type="text"
            placeholder="CNPJ"
            label={() => <InputLabel>CNPJ</InputLabel>}
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
              <Button
                isLoading={isSubmitting}
                loading={() => <ButtonLoadingLottie />}
                onClick={handleSubmit(onSubmit)}
              >
                Avançar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
