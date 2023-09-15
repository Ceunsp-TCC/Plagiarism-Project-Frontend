type PayloadModalLinkTeacher = {
  isOpen?: boolean
  lessonId?: number
}

export type ClasseState = {
  currentPage: number
  payloadModalLinkTeacher: PayloadModalLinkTeacher
  setCurrentPage: (currentPage: number) => void
  setIsOpenModalLinkTeacher: (payload: PayloadModalLinkTeacher) => void
}
