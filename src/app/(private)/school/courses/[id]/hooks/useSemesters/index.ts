'use client'
import { useQueryClient } from '@tanstack/react-query'
import { useCourseStore } from '@store'
import { useState } from 'react'
import type { Course } from '@services'

export function useSemesters() {
  const [semestersOpened, setSemestersOpened] = useState<number[]>([])
  const [lessonsOpened, setLessonsOpened] = useState<number[]>([])
  const { setIsOpenModalNewSemester, setIsOpenModalNewLesson } =
    useCourseStore()
  const queryClient = useQueryClient()
  const course = queryClient.getQueryData(['course']) as Course

  const semesters = course ? course.semesters : []

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
    semesters,
    setIsOpenModalNewSemester,
    checkAccordionIsOpened,
    onOpenOrCloseAccordions,
    setIsOpenModalNewLesson,
  }
}
