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
overflow-hidden 
border
border-gray-800 
rounded-3xl
`

export const CardContent = tw.div`
max-w-7xl 
mx-auto
`

export const ContainerHeader = tw.div`
mb-10 
md:max-w-md 
mx-auto 
text-center
`
export const Caption = tw.span`
inline-block 
mb-4 
text-sm 
text-blue-500 
font-bold 
uppercase 
tracking-widest
`

export const Title = tw.h2`
font-heading 
mb-6 
text-4xl 
md:text-5xl 
lg:text-6xl 
text-white 
font-black 
tracking-tight
`

export const Description = tw.p`
text-gray-400 
font-bold
`

export const ContainerCards = tw.div`
flex 
flex-wrap 
-m-4
`
