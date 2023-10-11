import { schoolGuardianApi } from '@services'
import type { SendAcademicPaperProps } from '@services'
import type { DefaultResponse } from '@types'

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
}
