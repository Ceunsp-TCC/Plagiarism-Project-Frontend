import tw from 'tailwind-styled-components'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Button } from '@components'

export const Content = tw.div`
flex
flex-col
items-center
w-72
md:w-96
`

export const SuccessIcon = tw(BsFillCheckCircleFill)`
fill-green-500
text-7xl
mb-5
`

export const Title = tw.h1`
text-white
font-semibold
text-lg
mb-3
`
export const Description = tw.p`
font-normal
text-gray-500
text-base
text-center
mb-8
`
export const BoxRandomPassword = tw.div`
flex
items-center
w-60
md:w-80
p-5
border-2
border-blue-500
rounded-full
justify-center
mb-8
`
export const RandomPasswordText = tw.p`
text-white
text-xl
font-semibold
`

export const ButtonWrapper = tw.div`
w-48
flex
justify-start

`

export const ButtonCustom = tw(Button)`
text-sm
h-12
`
