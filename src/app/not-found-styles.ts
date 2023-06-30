import tw from 'tailwind-styled-components'
import Link from 'next/link'

export const Container = tw.section`
py-10  
overflow-hidden
`

export const Content = tw.div`
container 
mx-auto
px-4
`
export const Card = tw.div`
py-10 
px-3 
bg-gray-900 
border 
border-gray-800 
rounded-3xl
`
export const CardContent = tw.div`
pb-32 
md:pb-64 
max-w-7xl 
mx-auto
`
export const ContainerInsideCard = tw.div`
md:max-w-md 
mx-auto 
text-center
`

export const StatusCode = tw.h3`
font-heading 
text-2xl 
text-blue-500 
font-black 
tracking-tight
`
export const Message = tw.h2`
font-heading 
mb-6 
text-4xl 
md:text-5xl 
lg:text-6xl 
text-white 
font-black 
tracking-tight
`

export const ContainerButton = tw.div`
flex 
flex-wrap 
justify-center 
-m-2
`

export const WrapperLink = tw.div`
w-full 
md:w-auto 
p-2
`
export const CustomLink = tw(Link)`
block 
w-full 
px-4 
py-2.5 
text-sm 
text-center 
text-white 
font-bold 
bg-blue-500 
hover:bg-blue-600 
focus:ring-4 
focus:ring-blue-200 
rounded-full
`
