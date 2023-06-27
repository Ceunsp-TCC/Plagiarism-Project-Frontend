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
md:px-16  
border
border-gray-800
rounded-3xl

`
export const ContainerCard = tw.div`
flex 
flex-wrap
 -m-8
`
export const ContainerImage = tw.div`
w-full 
md:w-1/2 
p-8
`

export const ContainerTexts = tw.div`
w-full
md:w-1/2 
p-8
`

export const ContentTexts = tw.div`
md:max-w-md

`
export const Caption = tw.span`
inline-block
mb-5 
text-sm
text-blue-500 
font-bold 
uppercase 
tracking-widest
`
export const Title = tw.h1`
font-heading 
mb-4 
text-4xl
 text-gray-100
font-black 
tracking-tight
`

export const TitleTextDetach = tw.span`
text-blue-500
`
export const TitleTextCommon = tw.span``

export const Description = tw.p`
mb-16
text-gray-500 
font-bold
`

export const ContainerBadges = tw.div`
flex
 flex-wrap 
 -m-2

`
