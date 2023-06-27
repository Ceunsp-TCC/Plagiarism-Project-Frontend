import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Container = tw.section`
pt-6 
pb-20  
overflow-hidden
hidden
lg:flex
`

export const Content = tw.div`
container 
mx-auto 
px-4
`

export const Card = tw.div`
flex 
items-center 
justify-between
px-6 py-3.5 
border
border-gray-800 
rounded-full
`

export const ContainerLogo = tw.div`
flex 
flex-wrap 
items-center

`

export const ContainerButtons = tw.div`
flex 
flex-wrap 
-m-2
`

export const WrapperButton = tw.div`
w-50
md:w-auto
 p-2
`

export const ButtonLanding = tw(Button)`
px-4 
py-2.5 
text-sm 
!important

`

export const ContainerLinks = tw.ul`
flex 
items-center 
justify-center
`
export const WrapperLink = tw.div`
mr-9
`
