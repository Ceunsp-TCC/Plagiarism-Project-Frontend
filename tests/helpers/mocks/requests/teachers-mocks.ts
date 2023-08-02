import { server } from '@tests/helpers'
import { rest } from 'msw'

export const createTeacherMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/teachers/create`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Teacher created successfully',
            content: {
              randomPassword: 'JB_fdicYSI',
            },
          }),
        )
      },
    ),
  )
}
