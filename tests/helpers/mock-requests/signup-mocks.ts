import { server } from '@tests/helpers'
import { rest } from 'msw'

export const validDocumentMock = (status: number) => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/schools/valid-document`,
      (req, res, ctx) => {
        return res(ctx.status(status))
      },
    ),
  )
}
export const validEmailMock = (status: number) => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/users/valid-email`,
      (req, res, ctx) => {
        return res(ctx.status(status))
      },
    ),
  )
}

export const validZipcodeMock = (status: number) => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/users/valid-zipcode`,
      (req, res, ctx) => {
        return res(ctx.status(status))
      },
    ),
  )
}
export const createSchoolMock = (status: number) => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/schools/create`,
      (req, res, ctx) => {
        return res(ctx.status(status))
      },
    ),
  )
}
