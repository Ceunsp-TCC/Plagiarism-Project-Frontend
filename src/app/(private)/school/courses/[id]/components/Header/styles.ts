import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Card = tw.div`
w-full
bg-gray-800
rounded-xl
px-5
py-5
h-max
`

export const Content = tw.div`
flex
gap-4
md:flex-row
flex-col
mb-24
md:mb-0
`

export const Image = tw.img`
md:w-60
h-48
rounded-lg
w-full
`
export const ContainerNameAndDescription = tw.div`
flex
flex-col
gap-3
`

export const Name = tw.h1`
text-white
text-2xl
font-semibold
text-center
md:text-justify
`

export const Description = tw.p`
text-gray-400
text-base
font-normal
overflow-y-auto
text-center
md:text-justify
`

export const ContainerButtonNewClass = tw.div`
flex
justify-end
w-full
-mt-14  
`

export const ButtonWrapper = tw.div`
w-32
`
export const ButtonCustom = tw(Button)`
text-sm
p-0
`
