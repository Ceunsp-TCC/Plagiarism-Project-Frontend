import tw from 'tailwind-styled-components'
import { Button } from '@components'
import { BsPencilFill } from 'react-icons/bs'

export const Container = tw.div`
mb-14
`

export const ClassName = tw.h1`
text-2xl
text-white
font-semibold
mb-7

`

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
export const ContainerLinkTeacher = tw.div`
flex
justify-end
`

export const Teacher = tw.p`
text-white
font-semibold
text-lg


`

export const TeacherName = tw.span`
font-normal
`

export const PenIcon = tw(BsPencilFill)`
fill-white
text-xl

`
