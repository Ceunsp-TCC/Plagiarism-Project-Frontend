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
p-1 
px-10 
md:px-0 
xs:p-5 
bg-gray-900 
border 
border-gray-800
rounded-3xl
`

export const CardContent = tw.div`
flex 
flex-wrap 
-m-8
`

export const CardInside = tw.div`
w-full 
md:w-1/2 
p-8
`
export const ContainerMasterLogo = tw.div`
py-12 
md:max-w-md 
mx-auto
`
export const ContainerLogoLink = tw.div`
flex 
flex-wrap 
items-center 
justify-between 
-m-2
mb-2
`
export const ContainerLogo = tw.div`
w-auto 
p-2
`

export const ContainerLink = tw.div`
w-auto 
p-2
`

export const ContainerLottie = tw.div`
w-full 
md:w-1/2 
p-8
`
export const ContentLottie = tw.div`
hidden 
lg:flex 
flex-col 
justify-end 
py-16
px-8 
text-center 
h-full 
rounded-3xl
`

export const SubContainerLottie = tw.div`
md:max-w-md 
mx-auto

`

export const LottieTitle = tw.h3`
font-heading 
mb-3 
text-3xl
text-white 
font-black 
tracking-tight
`

export const LottieDescription = tw.p`
mb-9 
text-blue-100 
font-bold
`
