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
