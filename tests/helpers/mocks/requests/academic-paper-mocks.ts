import { server } from '@tests/helpers'
import { rest } from 'msw'

export const sendAcademicPaperMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/academic-paper/send/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Academic paper saved',
          }),
        )
      },
    ),
  )
}
export const getAllAcademicPapersMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/academic-paper/get-all/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Academic papers found',
            content: {
              currentPage: 1,
              totalRegisters: 15,
              totalPages: 3,
              registersPerPage: 5,
              items: [
                {
                  id: 15,
                  paper:
                    'http://localhost:3335/uploads/academic-papers/3clnnsyt4r00030ilp125mc462.pdf',
                  comments: '',
                  createdAt: '12/10/2023 20:20:15',
                  student: {
                    id: 3,
                    cpf: '64404484399',
                    randomPassword: false,
                    status: 'ACTIVE',
                    user: {
                      id: 5,
                      name: 'Diogo Nathan Julio Ribeiro',
                      email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                      phoneNumber: '62992778258',
                      roleName: 'STUDENT',
                      createdAt: '05/09/2023 21:28:16',
                    },
                  },
                },
                {
                  id: 14,
                  paper:
                    'http://localhost:3335/uploads/academic-papers/3clnnst57v00010ilp91kw12g0.pdf',
                  comments: '',
                  createdAt: '12/10/2023 20:15:51',
                  student: {
                    id: 3,
                    cpf: '64404484399',
                    randomPassword: false,
                    status: 'ACTIVE',
                    user: {
                      id: 5,
                      name: 'Diogo Nathan Julio Ribeiro',
                      email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                      phoneNumber: '62992778258',
                      roleName: 'STUDENT',
                      createdAt: '05/09/2023 21:28:16',
                    },
                  },
                },
                {
                  id: 13,
                  paper:
                    'http://localhost:3335/uploads/academic-papers/3clnl0rpj5000fwzlp7506f217.pdf',
                  comments: 'teste',
                  createdAt: '10/10/2023 21:35:22',
                  student: {
                    id: 3,
                    cpf: '64404484399',
                    randomPassword: false,
                    status: 'ACTIVE',
                    user: {
                      id: 5,
                      name: 'Diogo Nathan Julio Ribeiro',
                      email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                      phoneNumber: '62992778258',
                      roleName: 'STUDENT',
                      createdAt: '05/09/2023 21:28:16',
                    },
                  },
                },
                {
                  id: 12,
                  paper:
                    'http://localhost:3335/uploads/academic-papers/3clnl0os330009wzlp1z9r9p8p.pdf',
                  comments: '',
                  createdAt: '10/10/2023 21:33:05',
                  student: {
                    id: 3,
                    cpf: '64404484399',
                    randomPassword: false,
                    status: 'ACTIVE',
                    user: {
                      id: 5,
                      name: 'Diogo Nathan Julio Ribeiro',
                      email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                      phoneNumber: '62992778258',
                      roleName: 'STUDENT',
                      createdAt: '05/09/2023 21:28:16',
                    },
                  },
                },
                {
                  id: 11,
                  paper:
                    'http://localhost:3335/uploads/academic-papers/3clnl0nnzp0007wzlpg4yq8jnz.pdf',
                  comments: '',
                  createdAt: '10/10/2023 21:32:13',
                  student: {
                    id: 3,
                    cpf: '64404484399',
                    randomPassword: false,
                    status: 'ACTIVE',
                    user: {
                      id: 5,
                      name: 'Diogo Nathan Julio Ribeiro',
                      email: 'diogo_nathan_ribeiro@alvesbarcelos.com.br',
                      phoneNumber: '62992778258',
                      roleName: 'STUDENT',
                      createdAt: '05/09/2023 21:28:16',
                    },
                  },
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
export const getAcademicPaperByIdMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/academic-paper/get-by-id/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Academic paper found',
            content: {
              id: 19,
              paper:
                'http://localhost:3335/uploads/academic-papers/3clnpcq3sj0001r2nt3suwe1z4.pdf',
              comments: 'testee',
              createdAt: '13/10/2023 22:21:07',
            },
          }),
        )
      },
    ),
  )
}
