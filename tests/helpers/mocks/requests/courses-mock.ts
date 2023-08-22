import { server } from '@tests/helpers'
import { rest } from 'msw'

export const createCourseMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/courses/create`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Course created successfully',
          }),
        )
      },
    ),
  )
}
export const getCourseMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/courses/get-by-id/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Course found',
            content: {
              id: 1,
              name: 'Animação Digital',
              description:
                'A Animação Digital é uma das grandes áreas que envolvem a produção de Jogos Digitais. Saber animar um personagem ou uma cena em duas e/ou três dimensões é uma competência que todo desenvolvedor de jogos deve ter.',
              modality: 'ONLINE',
              category: 'INFORMATIONTECHNOLOGY',
              price: 323,
              image:
                'http://localhost:3335/uploads/courses/AnimaçãoDigitalcllf7akll000t0in00udaflaf.jpg',
              createdAt: '17/08/2023 10:31:58',
              semesters: [
                {
                  id: 3,
                  name: 'semestre test',
                  description: 'semestre test',
                  createdAt: '17/08/2023 15:44:39',
                  lessons: [
                    {
                      id: 1,
                      name: 'Ingles',
                      description: 'Aula para aprender ingles',
                      place: 'Campus 2',
                      createdAt: '20/08/2023 21:40:31',
                    },
                  ],
                },
                {
                  id: 4,
                  name: '2° Semestre',
                  description: 'semestre semestral',
                  createdAt: '18/08/2023 14:33:15',
                  lessons: [],
                },
                {
                  id: 5,
                  name: '3° Semestre',
                  description: 'semestrudo',
                  createdAt: '18/08/2023 14:33:57',
                  lessons: [
                    {
                      id: 2,
                      name: 'Ingles new ',
                      description: 'ingles new',
                      place: 'Campus virtual',
                      createdAt: '20/08/2023 21:41:12',
                    },
                    {
                      id: 3,
                      name: 'Matemática',
                      description: 'Matématica aplicada',
                      place: 'Campus 1',
                      createdAt: '20/08/2023 21:41:31',
                    },
                  ],
                },
                {
                  id: 6,
                  name: 'gabriel',
                  description: 'ddd',
                  createdAt: '20/08/2023 20:48:43',
                  lessons: [],
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
export const getAllCoursesMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/courses/get-all`,
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
              totalRegisters: 6,
              totalPages: 2,
              registersPerPage: 5,
              items: [
                {
                  id: 1,
                  name: 'Ciências da Computação2',
                  description: 'Curso para ciencias da computação',
                  modality: 'HYBRID',
                  category: 'INFORMATIONTECHNOLOGY',
                  price: 1.2,
                  image:
                    'http://localhost:3335/uploads/courses/CiênciasdaComputação2cllbmu93y00090in00p2m8pqy.jpg',
                  createdAt: '14/08/2023 22:36:06',
                },
                {
                  id: 2,
                  name: 'Ciências da Computação2',
                  description: 'Curso para ciencias da computação',
                  modality: 'HYBRID',
                  category: 'INFORMATIONTECHNOLOGY',
                  price: 1.2,
                  image:
                    'http://localhost:3335/uploads/courses/CiênciasdaComputação2cllbmu93y00090in00p2m8pqy.jpg',
                  createdAt: '14/08/2023 22:36:06',
                },
                {
                  id: 3,
                  name: 'Ciências da Computação2',
                  description: 'Curso para ciencias da computação',
                  modality: 'HYBRID',
                  category: 'INFORMATIONTECHNOLOGY',
                  price: 1.2,
                  image:
                    'http://localhost:3335/uploads/courses/CiênciasdaComputação2cllbmu93y00090in00p2m8pqy.jpg',
                  createdAt: '14/08/2023 22:36:06',
                },
                {
                  id: 4,
                  name: 'Ciências da Computação2',
                  description: 'Curso para ciencias da computação',
                  modality: 'HYBRID',
                  category: 'INFORMATIONTECHNOLOGY',
                  price: 1.2,
                  image:
                    'http://localhost:3335/uploads/courses/CiênciasdaComputação2cllbmu93y00090in00p2m8pqy.jpg',
                  createdAt: '14/08/2023 22:36:06',
                },
                {
                  id: 5,
                  name: 'Ciências da Computação2',
                  description: 'Curso para ciencias da computação',
                  modality: 'HYBRID',
                  category: 'INFORMATIONTECHNOLOGY',
                  price: 1.2,
                  image:
                    'http://localhost:3335/uploads/courses/CiênciasdaComputação2cllbmu93y00090in00p2m8pqy.jpg',
                  createdAt: '14/08/2023 22:36:06',
                },
                {
                  id: 6,
                  name: 'Ciências da Computação2',
                  description: 'Curso para ciencias da computação',
                  modality: 'HYBRID',
                  category: 'INFORMATIONTECHNOLOGY',
                  price: 1.2,
                  image:
                    'http://localhost:3335/uploads/courses/CiênciasdaComputação2cllbmu93y00090in00p2m8pqy.jpg',
                  createdAt: '14/08/2023 22:36:06',
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
