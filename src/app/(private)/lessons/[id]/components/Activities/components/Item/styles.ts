import tw from 'tailwind-styled-components'

export const Card = tw.div`
w-full
xl:h-40
h-48
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
flex-col
md:flex-row
`

export const ContainerTitleAndObservationAndCreatedAt = tw.div`
flex
flex-col
ml-4
w-full
xl:w-1/4
`
export const Title = tw.h1`
text-white
font-semibold
text-xl
mb-1
text-center
md:text-left
`

export const ActivityType = tw.span`
text-gray-500
text-lg
ml-1
`
export const ContainerObservationAndIsSent = tw.div`
flex
gap-2
h-max
`

export const Observation = tw.p`
text-gray-500
font-medium
text-base
text-center
h-16
overflow-y-auto
md:text-left
w-96
`

export const BadgesContainer = tw.div`
flex
flex-col
w-[35rem]


`

export const CreatedAt = tw.p`
text-gray-500
font-medium
text-base

`

export const BadgeWrapper = tw.div`


`
