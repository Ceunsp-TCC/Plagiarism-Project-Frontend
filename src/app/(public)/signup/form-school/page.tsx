'use client'
import { Button, Input, ErrorMessage } from '@/components'
import { useFormSchool } from '@/app/(public)/signup/hooks'
import type { FormSchoolFields } from '@/app/(public)/signup/types'
import { checkHasError } from '@/functions'

export default function FormSchool() {
  const { errors, handleSubmit, onSubmit, register, push } = useFormSchool()
  return (
    <form method="post">
      <div className="flex flex-wrap -m-3">
        <div className="w-full p-3">
          <Input<FormSchoolFields>
            register={register}
            hasError={checkHasError(errors.name)}
            type="text"
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
            name="email"
            errorMessage={() =>
              checkHasError(errors.email) && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )
            }
          />
        </div>
        <div className="w-full p-3">
          <Input<FormSchoolFields>
            register={register}
            hasError={checkHasError(errors.phoneNumber)}
            type="text"
            placeholder="Número de telefone"
            name="phoneNumber"
            errorMessage={() =>
              checkHasError(errors.phoneNumber) && (
                <ErrorMessage>{errors.phoneNumber?.message}</ErrorMessage>
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
              <Button onClick={() => push('/')} variant="secondary">
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
// table.string('CNPJ', 16).notNullable().unique()
// table.string('CEP', 50).notNullable()
// table.string('street', 255).notNullable()
// table.string('district', 150).notNullable()
// table.string('city', 100).notNullable()
// table.string('state', 5).notNullable()
// table.string('complement', 100).nullable()
// table.integer('number').nullable()
// table.enum('status', ['INREVIEW', 'CANCELED', 'COMPLETED']).defaultTo('INREVIEW')
// table.foreign('userId').references('users.id').onDelete('CASCADE')
