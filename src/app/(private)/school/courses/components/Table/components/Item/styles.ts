import tw from 'tailwind-styled-components'

export const Card = tw.div`
w-full
lg:h-60
bg-gray-700
border-[1px]
border-gray-400
rounded-lg
py-5
px-5
flex
transition-all
duration-500
hover:opacity-80
cursor-pointer
h-max
flex-col
lg:flex-row
`
export const ContainerImage = tw.div`
flex
items-center
justify-center
`
export const ImageCustom = tw.img`
w-60
h-48
rounded-lg
`

export const ContainerNameAndDescriptionAndCategory = tw.div`
flex
flex-col
ml-4
md:w-1/4
`
export const Name = tw.h1`
text-white
font-semibold
text-xl
mb-1
text-center
md:text-left
`

export const Description = tw.p`
text-gray-500
font-medium
text-base
mb-6
text-center
h-72
overflow-y-auto
md:text-left
`

export const TitleInformation = tw.h3`
text-gray-500
text-base
text-center
md:text-left
`
export const ValueInformation = tw.p`
text-white
text-base
font-semibold
text-center
md:text-left
`
export const ContainerAdditionalInformations = tw.div`
flex
md:flex-row
flex-col
md:ml-24
md:mt-0.5
gap-12

`

export const ContainerModality = tw.div`
flex
flex-col
`
export const ContainerPrice = tw.div`
flex
flex-col
`
export const ContainerCreatedAt = tw.div`
flex
flex-col
`
