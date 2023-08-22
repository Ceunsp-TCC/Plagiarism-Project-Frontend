type PayloadModalNewLesson = {
  isOpen?: boolean
  semesterId?: number
}

export type CourseState = {
  isOpenModalNewSemester: boolean
  payloadModalNewLesson: PayloadModalNewLesson
  setIsOpenModalNewSemester: (isOpenModalNewSemester: boolean) => void
  setIsOpenModalNewLesson: (payload: PayloadModalNewLesson) => void
}
