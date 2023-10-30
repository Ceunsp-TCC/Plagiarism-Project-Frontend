import { schoolGuardianApi } from '@services'
import type {
  OrtographicCorrection,
  GetAllOrtographicCorrectionsProps,
} from '@services'
import type { DefaultResponseWithContent, DefaultPaginate } from '@types'

export const ortographyCorrectionsServices = {
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
