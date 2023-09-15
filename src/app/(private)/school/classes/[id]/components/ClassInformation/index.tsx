'use client'
import { useGetClass } from '@/app/(private)/school/classes/[id]/hooks'
import { CommonAccordion } from '@components'
import { ModalLinkTeacher } from '@/app/(private)/school/classes/[id]/components'
import { useClasseStore } from '@store'
import * as S from './styles'

export function ClassInformation() {
  const { classe, checkAccordionIsOpened, onOpenOrCloseAccordions } =
    useGetClass()
  const { setIsOpenModalLinkTeacher } = useClasseStore()

  return (
    <>
      <S.Container>
        <S.ClassName>{classe?.name}</S.ClassName>
        <S.Card>
          <S.Content>
            <S.ContainerSemesters>
              {classe?.semesters.map((semester, indexSemester) => {
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
                      <S.SemesterDescription>
                        {semester.description}
                      </S.SemesterDescription>

                      <S.ContainerLessons>
                        {semester.lessons.map((lesson, indexLesson) => {
                          const isFirstLesson = indexLesson === 0
                          const hasTeacher = lesson.teacher !== null
                          return (
                            <CommonAccordion
                              key={lesson.id}
                              title={lesson.name}
                              isOpen={checkAccordionIsOpened(
                                lesson.id,
                                'LESSON',
                              )}
                              onClick={() =>
                                onOpenOrCloseAccordions(lesson.id, 'LESSON')
                              }
                              isRounded={isFirstLesson}
                            >
                              <S.ContentAccordionLessons>
                                <S.LessonDescription>
                                  {lesson.description}
                                </S.LessonDescription>
                                <S.ContainerLinkTeacher>
                                  <S.ButtonWrapper>
                                    <S.ButtonCustom
                                      onClick={() =>
                                        setIsOpenModalLinkTeacher({
                                          isOpen: true,
                                          lessonId: lesson.id,
                                        })
                                      }
                                    >
                                      {hasTeacher ? (
                                        'Alterar professor'
                                      ) : (
                                        <>
                                          <S.PlusText>+</S.PlusText>
                                          Adicionar professor
                                        </>
                                      )}
                                    </S.ButtonCustom>
                                  </S.ButtonWrapper>
                                </S.ContainerLinkTeacher>
                                {hasTeacher && (
                                  <S.Teacher>
                                    Professor:{' '}
                                    <S.TeacherName>
                                      {lesson.teacher?.user.name}
                                    </S.TeacherName>
                                  </S.Teacher>
                                )}
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
      </S.Container>
      <ModalLinkTeacher />
    </>
  )
}
