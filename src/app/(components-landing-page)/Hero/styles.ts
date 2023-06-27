import tw from 'tailwind-styled-components'

export const Container = tw.section`
pt-6 
pb-10 
overflow-hidden
`
export const Content = tw.div`
container 
mx-auto
px-4
`
export const Card = tw.div`
px-8 
py-20 
overflow-hidden 
border 
border-gray-800 
rounded-3xl
`

export const ContainerTexts = tw.div`
md:max-w-2xl 
text-center 
mx-auto
`
export const Caption = tw.span`
inline-block
mb-3
text-sm
text-blue-500 
font-bold
uppercase 
tracking-widest
`

export const Title = tw.h1`
font-heading 
mb-6 
text-5xl
lg:text-6xl
text-white 
font-black
tracking-tight
`
export const CommonTextInTitle = tw.span``
export const DetachTextInTitle = tw.span`
text-transparent 
bg-clip-text
bg-gradient-to-r 
from-blue-500 
to-gray-400
`
export const Description = tw.p`
mb-8 
text-xl
text-gray-500 
font-bold
`
