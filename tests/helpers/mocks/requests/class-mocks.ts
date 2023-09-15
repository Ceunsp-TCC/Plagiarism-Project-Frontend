import { server } from '@tests/helpers'
import { rest } from 'msw'

export const createClassMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/classes/create/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Class created successfully',
          }),
        )
      },
    ),
  )
}
export const getAllClassesMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/classes/get-all`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Classes found',
            content: {
              currentPage: 1,
              totalRegisters: 12,
              totalPages: 2,
              registersPerPage: 10,
              items: [
                {
                  id: 1,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 2,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 3,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 4,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 5,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 6,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 7,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 8,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 9,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 10,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 11,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
                {
                  id: 12,
                  name: 'Teste-cllzwl7gb000044otcf6h9gat-2023',
                  createdAt: '31/08/2023 22:15:28',
                },
              ],
            },
          }),
        )
      },
    ),
  )
}

export const getOneClassMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/classes/get-by-id/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Class found',
            content: {
              id: 1,
              name: 'Teste-clm6ygh610003c5npfqsida62-2023',
              createdAt: '05/09/2023 20:42:10',
              semesters: [
                {
                  id: 1,
                  name: 'semestre test',
                  description: 'semestre test',
                  createdAt: '05/09/2023 20:42:10',
                  lessons: [
                    {
                      id: 1,
                      name: 'lesson test',
                      description: 'semestre test',
                      place: 'local',
                      createdAt: '05/09/2023 20:42:10',
                      teacher: {
                        id: 1,
                        cpf: '286001180342',
                        cnd: '919823193918',
                        randomPassword: true,
                        status: 'ACTIVE',
                        user: {
                          id: 6,
                          name: 'Hugo Martin André Pinto',
                          email: 'hugo.martin.pinto@cabletech.com',
                          phoneNumber: '71987101751',
                          roleName: 'TEACHER',
                          createdAt: '09/09/2023 17:43:21',
                        },
                      },
                    },
                  ],
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
export const getAllStudentsByClassMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/classes/get-students/1`,
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
export const linkTeacherAndLessonMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.put(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/classes/link-teacher-and-lesson`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message:
              'Teacher connection with the lesson successfully established',
          }),
        )
      },
    ),
  )
}
