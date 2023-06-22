'use client'
import { Button, Input, InputMask, ErrorMessage } from '@/components'
import { useFormSchoolAddress } from '@/app/(public)/signup/hooks'
import type { FormSchoolAddressFields } from '@/app/(public)/signup/types'
import { checkHasError } from '@/functions'

export default function FormSchoolAddress() {
  const { errors, handleSubmit, onSubmit, register } = useFormSchoolAddress()

  return (
    <form method="post">
      <div className="mb-10">
        <p className="text-gray-500 font-bold">Agora precisamos do endereço</p>
      </div>
      <div className="flex flex-wrap -m-3">
        <div className="w-full p-3">
          <InputMask<FormSchoolAddressFields>
            register={register}
            hasError={checkHasError(errors.CEP)}
            type="text"
            mask="99999-999"
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
          <Input<FormSchoolAddressFields>
            register={register}
            type="text"
            placeholder="Complemento"
            name="complement"
          />
        </div>
        <div className="w-full p-3">
          <Input<FormSchoolAddressFields>
            register={register}
            type="text"
            placeholder="Número"
            name="number"
          />
        </div>

        <div className="w-full p-3">
          <div className="flex flex-wrap md:justify-end -m-2">
            <div className="w-full p-2">
              <Button onClick={handleSubmit(onSubmit)}>Avançar</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
