import tw from 'tailwind-styled-components'
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { Button } from '@components'

export const Container = tw.section`
pt-6 
pb-20  
overflow-hidden
flex
lg:hidden
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
px-6
py-3.5
bg-gray-900 
border 
border-gray-800 
rounded-full
`

export const ContainerSideBar = tw.div`
fixed 
top-0 
left-0 
bottom-0 
w-4/6 
sm:max-w-xs 
z-50
`

export const BackDrop = tw.div`
fixed 
inset-0
bg-gray-800
 opacity-80
`

export const ContainerNav = tw.div`
relative 
z-10 
px-9 
pt-8 
bg-gray-800 
h-full 
overflow-y-auto
`
export const ContentNav = tw.div`
flex 
flex-wrap 
justify-between
 h-full
`
export const ContainerLinks = tw.div`
flex 
flex-col
justify-center
py-8
w-full
`

export const ListLinks = tw.ul``

export const LinkWrapper = tw.li`
mb-9
`
export const ContainerLogo = tw.div`
flex 
flex-wrap 
items-center
`

export const ContainerHeader = tw.div`
flex 
items-center 
justify-between 
-m-2
`
export const SubContainerHeader = tw.div`
w-full

`
export const ContainerButtons = tw.div`
flex 
flex-col 
justify-end 
w-full 
pb-8
`

export const SubContainerButtons = tw.div`
flex 
flex-wrap 
-m-2
`
export const MenuButton = tw.button`
rounded-full
bg-blue-500
p-3
hover:bg-blue-400
`
export const MenuIcon = tw(BiMenu)`
text-2xl
fill-white
`

export const MenuCloseIcon = tw(IoMdClose)`
cursor-pointer
fill-white
text-2xl
hover:fill-gray-500
`

export const ContainerMenuCloseIcon = tw.div`
w-auto 
p-2
`
export const WrapperButton = tw.div`
w-full 
p-2
`
export const ButtonLanding = tw(Button)<{
  $isSecondary?: boolean
}>`
text-sm 
${({ $isSecondary }) => ($isSecondary ? 'hover:bg-gray-700' : '')}

`
