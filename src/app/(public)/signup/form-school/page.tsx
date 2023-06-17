import { Button, Input } from '@/components'

export default function FormSchool() {
  return (
    <form>
      <div className="flex flex-wrap -m-3">
        <div className="w-full p-3">
          <Input type="text" placeholder="Nome" name="name" />
        </div>
        <div className="w-full p-3">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="w-full p-3">
          <Input type="text" placeholder="Número de telefone" />
        </div>

        <div className="w-full p-3">
          <div className="flex flex-wrap md:justify-end -m-2">
            <div className="w-full p-2">
              <Button>Avançar</Button>
            </div>
            <div className="w-full p-2">
              <Button variant="secondary">Voltar</Button>
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
