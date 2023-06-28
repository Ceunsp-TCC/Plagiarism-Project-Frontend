import tw from 'tailwind-styled-components'

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
py-16 
px-8 
bg-gray-900
border
border-gray-800 
rounded-3xl
`

export const CardContent = tw.div`
max-w-7xl 
mx-auto
`

export const ContainerTitle = tw.div`
mb-12 
max-w-lg 
mx-auto 
text-center
`

export const Title = tw.div`
font-heading 
mb-6 
text-4xl
md:text-5xl 
text-gray-100 
font-black 
tracking-tight
`

export const Description = tw.p`
text-gray-600 
font-bold
`

export const ContainerCards = tw.div`
flex 
flex-wrap 
-m-4
`

export const SubCard = tw.div`
w-full 
md:w-1/2
p-4
`

export const ContentSubCard = tw.div`
py-14 
px-8 
text-center 
h-full 
bg-gray-900 
border 
border-gray-800 
rounded-3xl
`

export const SubCardInside = tw.div`
md:max-w-xs
mx-auto
`
export const PercentageTitle = tw.div`
font-heading 
mb-6 
text-5xl 
md:text-6xl
lg:text-7xl 
text-gray-900 
font-black 
tracking-tight
`
export const Percentage = tw.div`
text-transparent 
bg-clip-text 
bg-gradient-to-r 
from-blue-500 
to-gray-400
`

export const SubTitlePercentage = tw.div`
font-heading 
mb-3.5 
text-xl 
text-gray-100 
font-bold
`
export const DescriptionPercentage = tw.div`
text-gray-700 
font-bold
`
