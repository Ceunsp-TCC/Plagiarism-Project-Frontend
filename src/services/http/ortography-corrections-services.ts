import { schoolGuardianApi } from '@services'
import type {
  OrtographicCorrection,
  GetAllOrtographicCorrectionsProps,
  CreateOrtographicCorrectionProps,
} from '@services'
import type {
  DefaultResponseWithContent,
  DefaultPaginate,
  DefaultResponse,
} from '@types'

export const ortographyCorrectionsServices = {
  create: async (body: CreateOrtographicCorrectionProps) => {
    const formData = new FormData()

    for (const key in body) {
      formData.append(key, (body as any)[key])
    }
    const response = await schoolGuardianApi.post<DefaultResponse>(
      'v1/ortography-corrections/create',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/formdata',
        },
      },
    )

    return response.data
  },
  getAll: async ({
    currentPage = 1,
    identifier = undefined,
  }: GetAllOrtographicCorrectionsProps) => {
    const params = {
      currentPage,
      identifier,
    }

    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<OrtographicCorrection>>
    >('v1/ortography-corrections/get-all', { params })

    return response.data.content
  },
}
