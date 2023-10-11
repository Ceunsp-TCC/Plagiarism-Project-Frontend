import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Form = tw.form`
mt-10
flex
flex-col
gap-5
`

export const InputWrapper = tw.div``

export const ButtonWrapper = tw.div`
w-40
`
export const ContainerButton = tw.div`
flex
justify-end
mt-5
`
export const ButtonCustom = tw(Button)`
text-sm
h-12
`
