import { server } from '@tests/helpers'
import { rest } from 'msw'
export const createLessonMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/lessons/create/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Lesson created successfully',
          }),
        )
      },
    ),
  )
}
export const getLessonsByTeacher = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/lessons/get-lessons-by-teacher`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Lessons found',
            content: {
              currentPage: 1,
              totalRegisters: 1,
              totalPages: 1,
              registersPerPage: 5,
              items: [
                {
                  id: 7,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
              ],
            },
          }),
        )
      },
    ),
  )
}

export const getLessonsByStudent = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/lessons/get-lessons-by-student`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Lessons found',
            content: {
              currentPage: 1,
              totalRegisters: 11,
              totalPages: 1,
              registersPerPage: 5,
              items: [
                {
                  id: 1,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 2,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 3,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 4,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 5,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 6,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 7,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 8,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 9,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 10,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
                {
                  id: 11,
                  name: 'Ingles',
                  description: 'ttttt',
                  place: 'Campus Virtual',
                  createdAt: '12/09/2023 21:01:31',
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
