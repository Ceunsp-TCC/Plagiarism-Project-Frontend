'use client'
import { CommonAccordion } from '@components'
import { usePermissions } from '@hooks'
import { useSemesters } from '@/app/(private)/school/courses/[id]/hooks'
import {
  ModalNewSemester,
  ModalNewLesson,
} from '@/app/(private)/school/courses/[id]/components'
import type { SemestersProps } from '@/app/(private)/school/courses/[id]/types'
import * as S from './styles'

export function Semesters({ semesters = [] }: SemestersProps) {
  const {
    setIsOpenModalNewSemester,
    setIsOpenModalNewLesson,
    checkAccordionIsOpened,
    onOpenOrCloseAccordions,
  } = useSemesters()
  const { checkHasPermission } = usePermissions()

  return (
    <>
      <S.Card>
        <S.Content>
          {checkHasPermission('createSemester') && (
            <S.ContainerButtonNewSemester>
              <S.ContainerButtonNewSemester>
                <S.ButtonWrapper>
                  <S.ButtonCustom
                    onClick={() => setIsOpenModalNewSemester(true)}
                  >
                    <S.PlusText>+</S.PlusText> Adicionar semestre
                  </S.ButtonCustom>
                </S.ButtonWrapper>
              </S.ContainerButtonNewSemester>
            </S.ContainerButtonNewSemester>
          )}

          <S.ContainerSemesters>
            {semesters.map((semester, indexSemester) => {
              const isFirstSemester = indexSemester === 0
              return (
                <CommonAccordion
                  isRounded={isFirstSemester}
                  key={semester.id}
                  title={semester.name}
                  isOpen={checkAccordionIsOpened(semester.id, 'SEMESTER')}
                  onClick={() =>
                    onOpenOrCloseAccordions(semester.id, 'SEMESTER')
                  }
                >
                  <S.ContentAccordion>
                    <S.ContainerButtonNewLessonAndDescriptionSemester>
                      <S.SemesterDescription>
                        {semester.description}
                      </S.SemesterDescription>
                      {checkHasPermission('createLesson') && (
                        <S.ContainerButtonNewLesson>
                          <S.ButtonWrapper>
                            <S.ButtonCustom
                              onClick={() =>
                                setIsOpenModalNewLesson({
                                  isOpen: true,
                                  semesterId: semester.id,
                                })
                              }
                            >
                              <S.PlusText>+</S.PlusText> Adicionar aula
                            </S.ButtonCustom>
                          </S.ButtonWrapper>
                        </S.ContainerButtonNewLesson>
                      )}
                    </S.ContainerButtonNewLessonAndDescriptionSemester>
                    <S.ContainerLessons>
                      {semester.lessons.map((lesson, indexLesson) => {
                        const isFirstLesson = indexLesson === 0
                        return (
                          <CommonAccordion
                            key={lesson.id}
                            title={lesson.name}
                            isOpen={checkAccordionIsOpened(lesson.id, 'LESSON')}
                            onClick={() =>
                              onOpenOrCloseAccordions(lesson.id, 'LESSON')
                            }
                            isRounded={isFirstLesson}
                          >
                            <S.ContentAccordionLessons>
                              <S.LessonDescription>
                                {lesson.description}
                              </S.LessonDescription>
                            </S.ContentAccordionLessons>
                          </CommonAccordion>
                        )
                      })}
                    </S.ContainerLessons>
                  </S.ContentAccordion>
                </CommonAccordion>
              )
            })}
          </S.ContainerSemesters>
        </S.Content>
      </S.Card>
      <ModalNewSemester />
      <ModalNewLesson />
    </>
  )
}
