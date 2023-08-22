import { schoolGuardianApi } from '@services'
import type { CreateSemesterProps } from '@services'
import type { DefaultResponse } from '@types'

export const semesterServices = {
  create: async ({
    name = '',
    description = '',
    courseId = 0,
  }: CreateSemesterProps) => {
    const body = {
      name,
      description,
    }
    const response = await schoolGuardianApi.post<DefaultResponse>(
      `v1/semesters/create/${courseId}`,
      body,
    )

    return response.data
  },
}
