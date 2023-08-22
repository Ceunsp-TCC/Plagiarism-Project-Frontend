import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Card = tw.div`
w-full
bg-gray-800
h-max
rounded-xl
px-5
py-5
`

export const Content = tw.div`
flex
flex-col
gap-4
`

export const ContainerButtonNewSemester = tw.div`
w-full
flex
justify-end
mb-4
`
export const ButtonWrapper = tw.div`
w-44
`
export const ButtonCustom = tw(Button)`
text-sm
p-0
`
export const PlusText = tw.span`
mr-2
`

export const ContainerSemesters = tw.div``

export const ContentAccordion = tw.div`
flex
flex-col
px-7
py-7
`

export const SemesterDescription = tw.p`
mb-7
text-gray-400
`

export const LessonDescription = tw.p`
mb-7
text-gray-400
`

export const ContainerLessons = tw.div``

export const ContentAccordionLessons = tw.div`
flex
flex-col
px-7
py-7
`
export const ContainerButtonNewLesson = tw.div``

export const ContainerButtonNewLessonAndDescriptionSemester = tw.div`
flex
justify-between
items-center
mb-6
`
