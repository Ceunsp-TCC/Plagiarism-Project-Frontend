import { server } from '@tests/helpers'
import { rest } from 'msw'

export const createStudentMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/students/create`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Student created successfully',
            content: {
              randomPassword: 'JB_fdicYSI',
            },
          }),
        )
      },
    ),
  )
}

export const getAllStudentsMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/students/get-all`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Students found',
            content: {
              currentPage: 1,
              totalRegisters: 12,
              totalPages: 2,
              registersPerPage: 10,
              items: [
                {
                  id: 65,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 66,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 67,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 68,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 69,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 70,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 71,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 72,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 73,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 74,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 75,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
                {
                  id: 76,
                  name: 'Diogo Nathan Julio Ribeiro',
                  phoneNumber: '62992778258',
                  email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                  cpf: '64404484399',
                  status: 'ACTIVE',
                  createdAt: '23/07/2023 20:50:48',
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
