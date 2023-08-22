import tw from 'tailwind-styled-components'

export const Card = tw.div`
w-full
bg-gray-800
h-max
rounded-xl
px-5
py-5
md:h-60
`

export const Content = tw.div`
flex
gap-4
md:flex-row
flex-col
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
