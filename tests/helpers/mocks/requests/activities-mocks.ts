import { server } from '@tests/helpers'
import { rest } from 'msw'
import type { ActivityType } from '@types'

export const createActivityMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/activities/create/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 201,
            message: 'Activity created successfully',
          }),
        )
      },
    ),
  )
}

export const getAllActivitiesMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/activities/get-all/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Activities found',
            content: [
              {
                id: 1,
                title: 'Envio de trabalho',
                comments: 'Envio até amanha',
                type: 'ACADEMICPAPER',
                createdAt: '21/09/2023 23:42:16',
              },
              {
                id: 2,
                title: 'Envio de trabalho',
                comments: 'Envio até amanha',
                type: 'ACADEMICPAPER',
                createdAt: '21/09/2023 23:42:16',
              },
              {
                id: 3,
                title: 'Envio de trabalho',
                comments: 'Envio até amanha',
                type: 'ACADEMICPAPER',
                createdAt: '21/09/2023 23:42:16',
              },
              {
                id: 4,
                title: 'Envio de trabalho',
                comments: 'Envio até amanha',
                type: 'ACADEMICPAPER',
                createdAt: '21/09/2023 23:42:16',
              },
            ],
          }),
        )
      },
    ),
  )
}

export const getActivityMock = (status: number, type: ActivityType) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/activities/get-by-id/1`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Activity found',
            content: {
              id: 1,
              title: 'Envio de trabalho',
              comments: 'Envio até amanha',
              type,
              createdAt: '21/09/2023 23:42:16',
            },
          }),
        )
      },
    ),
  )
}
