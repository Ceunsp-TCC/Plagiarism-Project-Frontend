import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Container = tw.section`
flex
flex-col
w-72
md:w-[43rem]

`

export const Title = tw.h1`
text-lg
text-white
font-medium
mb-10
`

export const Form = tw.form`

`
export const ContentForm = tw.div`
grid 
grid-cols-1
md:grid-cols-2
gap-5
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
