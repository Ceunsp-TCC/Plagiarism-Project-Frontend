'use client'
import { Button, Input, InputMask, ErrorMessage } from '@/components'
import { useFormSchoolAddress } from '@/app/(public)/signup/hooks'
import type { FormSchoolAddressFields } from '@/app/(public)/signup/types'
import { checkHasError } from '@/functions'

export default function FormSchoolAddress() {
  const { errors, handleSubmit, onSubmit, register, handleNavigate } =
    useFormSchoolAddress()

  return (
    <form method="post">
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
            maxLength={2}
            name="complement"
          />
        </div>
        <div className="w-full p-3">
          <Input<FormSchoolAddressFields>
            register={register}
            type="text"
            placeholder="Número"
            maxLength={2}
            name="number"
          />
        </div>

        <div className="w-full p-3">
          <div className="flex flex-wrap md:justify-end -m-2">
            <div className="w-full p-2">
              <Button onClick={handleSubmit(onSubmit)}>Avançar</Button>
            </div>
            <div className="w-full p-2">
              <Button
                onClick={() => handleNavigate('/signup/form-school')}
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

// table.string('password').notNullable() table.bigInteger('userId').notNullable()
// table.string('CEP', 50).notNullable()
// table.string('street', 255).notNullable()
// table.string('district', 150).notNullable()
// table.string('city', 100).notNullable()
// table.string('state', 5).notNullable()
// table.string('complement', 100).nullable()
// table.integer('number').nullable()
