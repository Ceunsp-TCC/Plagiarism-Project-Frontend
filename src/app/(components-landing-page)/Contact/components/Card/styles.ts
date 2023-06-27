import tw from 'tailwind-styled-components'

export const Container = tw.div`
w-full 
md:w-1/3
p-4
`

export const Card = tw.div`
p-10
text-center 
h-full 
bg-gray-800 
rounded-3xl
`

export const ContainerIcon = tw.div`
flex 
items-center 
justify-center 
mb-6 w-12 
h-12
mx-auto
bg-gray-900
rounded-xl
`

export const TitleCard = tw.h3`
font-heading 
mb-2 
text-xl 
text-white 
font-black
`

export const InfoCard = tw.p`
text-gray-500 
font-bold
`
