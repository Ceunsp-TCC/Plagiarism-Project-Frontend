import { schoolGuardianApi } from '@services'
import type {
  SendAcademicPaperProps,
  GetAllAcademicPapersProps,
  AcademicPaper,
} from '@services'
import type {
  DefaultResponse,
  DefaultResponseWithContent,
  DefaultPaginate,
} from '@types'

export const academicPapersServices = {
  send: async (body: SendAcademicPaperProps, activityId: number) => {
    const formData = new FormData()

    for (const key in body) {
      formData.append(key, (body as any)[key])
    }

    const response = await schoolGuardianApi.post<DefaultResponse>(
      `v1/academic-paper/send/${activityId}`,
      formData,
    )

    return response.data
  },
  getAll: async ({
    activityId = 0,
    currentPage = 1,
  }: GetAllAcademicPapersProps) => {
    const params = {
      currentPage,
      numberlinesPerPage: 5,
    }

    const response = await schoolGuardianApi.get<
      DefaultResponseWithContent<DefaultPaginate<AcademicPaper>>
    >(`v1/academic-paper/get-all/${activityId}`, { params })

    return response.data.content
  },
}
