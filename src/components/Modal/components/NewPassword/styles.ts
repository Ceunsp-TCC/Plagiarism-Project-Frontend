import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Content = tw.div`
flex
flex-col
w-[30rem]
`

export const Title = tw.h1`
text-white
font-semibold
text-base
mb-1
`
export const Description = tw.p`
font-normal
text-gray-500
text-sm
mb-8
`
export const Form = tw.form`
flex
flex-col
gap-7

`

export const InputWrapper = tw.div``

export const ButtonWrapper = tw.div`
w-48
flex
justify-start

`

export const ButtonCustom = tw(Button)`
text-sm
h-12
`
