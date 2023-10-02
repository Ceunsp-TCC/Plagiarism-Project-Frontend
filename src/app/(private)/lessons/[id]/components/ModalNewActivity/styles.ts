import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Container = tw.section`
flex
flex-col
w-72
overflow-y-auto
h-[30rem]
md:w-[43rem]
2xl:h-max
pl-2
`

export const Title = tw.h1`
text-lg
text-white
font-medium
mb-10
`

export const Form = tw.form`
pr-3
`
export const ContentForm = tw.div`
grid 
grid-cols-2
gap-4

`

export const ContainerButtons = tw.div`
ml-1
mt-8
`
export const InputWrapper = tw.div`


`
export const ButtonWrapper = tw.div`
w-40
`

export const ButtonCustom = tw(Button)`
text-sm
h-12
`
