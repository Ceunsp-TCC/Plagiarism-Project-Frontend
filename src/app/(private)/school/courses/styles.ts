import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const ContainerNewCourse = tw.div`
w-full
flex
justify-end
mb-3
`

export const ButtonWrapper = tw.div`
w-32
`

export const ButtonCustom = tw(Button)`
text-sm
h-12
`
