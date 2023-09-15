'use client'
import { classServices } from '@services'
import { useQuery } from '@tanstack/react-query'
import { useParams, notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useGetClass() {
  const [semestersOpened, setSemestersOpened] = useState<number[]>([])
  const [lessonsOpened, setLessonsOpened] = useState<number[]>([])
  const { id } = useParams()
  const {
    data: classe,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['class', id],
    queryFn: () =>
      classServices.getOne({
        classId: Number(id),
      }),
    refetchOnWindowFocus: false,
    retry: false,
  })
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
  useEffect(() => {
    if (isError) notFound()
  }, [isError])

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
    classe,
    isLoading,
    onOpenOrCloseAccordions,
    checkAccordionIsOpened,
  }
}
