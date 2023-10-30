import { server } from '@tests/helpers'
import { rest } from 'msw'

export const createCorretionMock = (status: number, message: string) => {
  server.use(
    rest.post(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/ortography-corrections/create`,
      (req, res, ctx) => {
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: status,
            message,
          }),
        )
      },
    ),
  )
}

export const getAllOrtographyCorrectionsMock = (status: number) => {
  const isFailed = status !== 200
  server.use(
    rest.get(
      `${process.env.NEXT_PUBLIC_SCHOOL_GUARDIAN_API}/v1/ortography-corrections/get-all`,
      (req, res, ctx) => {
        if (isFailed) {
          return res(ctx.status(status))
        }
        return res(
          ctx.status(status),
          ctx.json({
            statusCode: 200,
            message: 'Corrections found',
            content: {
              currentPage: 1,
              totalRegisters: 11,
              totalPages: 2,
              registersPerPage: 10,
              items: [
                {
                  id: 11,
                  userProvidedIdentifier: 'testedddccccccddddddddcccc',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccddddddddccccclo9eqv590001vgo50way9kir.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccddddddddccccclo9er3kj0000vro58awtczsi.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 23:13:07',
                },
                {
                  id: 10,
                  userProvidedIdentifier: 'testedddccccccddddddddcccc',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccddddddddccccclo9eqv590001vgo50way9kir.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccddddddddccccclo9er3kj0000vro58awtczsi.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 23:13:07',
                },
                {
                  id: 9,
                  userProvidedIdentifier: 'testedddccccccddddddddcccc',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccddddddddccccclo9eqv590001vgo50way9kir.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccddddddddccccclo9er3kj0000vro58awtczsi.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 23:13:07',
                },
                {
                  id: 8,
                  userProvidedIdentifier: 'testedddccccccddddddddcccc',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccddddddddccccclo9eqv590001vgo50way9kir.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccddddddddccccclo9er3kj0000vro58awtczsi.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 23:13:07',
                },
                {
                  id: 7,
                  userProvidedIdentifier: 'testedddccccccddddddddcccc',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccddddddddccccclo9eqv590001vgo50way9kir.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccddddddddccccclo9er3kj0000vro58awtczsi.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 23:13:07',
                },
                {
                  id: 6,
                  userProvidedIdentifier: 'testedddccccccdddddddd',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccddddddddclo9eg49w0002o1o55u3xa0n1.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccddddddddclo9eg6900001dmo540pv0gfb.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 23:04:46',
                },
                {
                  id: 5,
                  userProvidedIdentifier: 'testedddccccccddddd',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccdddddclo9e236h0001dbo5au38cd71.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccdddddclo9e282q0000dmo5f7z1eygb.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 22:53:49',
                },
                {
                  id: 4,
                  userProvidedIdentifier: 'testedddcccccc',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddccccccclo9e0ybh0002cpo56w8qd2mr.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddccccccclo9e14md0003d0o5d1v46ch8.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 22:52:56',
                },
                {
                  id: 3,
                  userProvidedIdentifier: 'testeddd',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddclo9dcas70002tio5fjue5y81.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddclo9dcbme0001ngo567on24hu.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 22:33:46',
                },
                {
                  id: 2,
                  userProvidedIdentifier: 'testeddd',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddclo9dcas70002tio5fjue5y81.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddclo9dcbme0001ngo567on24hu.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 22:33:46',
                },
                {
                  id: 1,
                  userProvidedIdentifier: 'testeddd',
                  original:
                    'http://localhost:3335/uploads/ortographic-correction/originals/testedddclo9dcas70002tio5fjue5y81.pdf',
                  result:
                    'http://localhost:3335/uploads/ortographic-correction/results/testedddclo9dcbme0001ngo567on24hu.pdf',
                  status: 'COMPLETED',
                  createdAt: '27/10/2023 22:33:46',
                },
              ],
            },
          }),
        )
      },
    ),
  )
}
