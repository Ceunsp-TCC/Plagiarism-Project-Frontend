'use client'
import {
  Button,
  ButtonLoadingLottie,
  Input,
  InputMask,
  ErrorMessage,
} from '@/components'
import { useFormSchoolAddress } from '@/app/(public)/signup/hooks'
import { checkHasError } from '@/functions'

export default function FormSchoolAddress() {
  const { errors, isSubmitting, handleSubmit, onSubmit, register } =
    useFormSchoolAddress()

  return (
    <form method="post">
      <div className="mb-10">
        <p className="text-gray-500 font-bold">Agora precisamos do endereço</p>
      </div>
      <div className="flex flex-wrap -m-3">
        <div className="w-full p-3">
          <InputMask
            {...register('CEP')}
            mask="99999-999"
            hasError={checkHasError(errors.CEP)}
            type="text"
            placeholder="CEP"
            name="CEP"
            errorMessage={() =>
              checkHasError(errors.CEP) && (
                <ErrorMessage>{errors.CEP?.message}</ErrorMessage>
              )
            }
          />
        </div>

        <div className="w-full p-3">
          <Input
            {...register('complement')}
            type="text"
            placeholder="Complemento"
            name="complement"
          />
        </div>
        <div className="w-full p-3">
          <Input
            {...register('number')}
            type="text"
            placeholder="Número"
            name="number"
          />
        </div>

        <div className="w-full p-3">
          <div className="flex flex-wrap md:justify-end -m-2">
            <div className="w-full p-2">
              <Button
                loading={() => <ButtonLoadingLottie />}
                isLoading={isSubmitting}
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
