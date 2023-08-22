'use client'
import { useCourseStore } from '@store'
import { useState } from 'react'

export function useSemesters() {
  const [semestersOpened, setSemestersOpened] = useState<number[]>([])
  const [lessonsOpened, setLessonsOpened] = useState<number[]>([])
  const { setIsOpenModalNewSemester, setIsOpenModalNewLesson } =
    useCourseStore()

  const checkAccordionIsOpened = (
    id: number,
    accordionType: 'SEMESTER' | 'LESSON',
  ) => {
    const isSemesterAccordion = accordionType === 'SEMESTER'
    const isOpened = isSemesterAccordion
      ? semestersOpened.includes(id)
      : lessonsOpened.includes(id)

    return isOpened
  }

  const onOpenOrCloseAccordions = (
    id: number,
    accordionType: 'SEMESTER' | 'LESSON',
  ) => {
    const isSemesterAccordion = accordionType === 'SEMESTER'
    const itsAlreadyOpen = isSemesterAccordion
      ? semestersOpened.includes(id)
      : lessonsOpened.includes(id)
    if (itsAlreadyOpen) {
      const removeAccordionInArrayForClose = isSemesterAccordion
        ? semestersOpened.filter((semester) => semester !== id)
        : lessonsOpened.filter((semester) => semester !== id)

      isSemesterAccordion
        ? setSemestersOpened(removeAccordionInArrayForClose)
        : setLessonsOpened(removeAccordionInArrayForClose)
    }

    if (!itsAlreadyOpen)
      isSemesterAccordion
        ? setSemestersOpened((state) => [...state, id])
        : setLessonsOpened((state) => [...state, id])
  }

  return {
    setIsOpenModalNewSemester,
    checkAccordionIsOpened,
    onOpenOrCloseAccordions,
    setIsOpenModalNewLesson,
  }
}
