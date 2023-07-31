import tw from 'tailwind-styled-components'
import { Dropdown } from 'flowbite-react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
export const Nav = tw.nav`
fixed 
top-0 
z-50 
w-full 
border-b 
bg-gray-800 
border-gray-700

`

export const ContentNav = tw.div`
px-3 
py-3 
lg:px-5 
lg:pl-3

`
export const SubContainer = tw.div`
flex 
items-center 
justify-between
`

export const ContainerLogoAvatar = tw.div`
flex 
items-center 
justify-start

`

export const ContainerLogo = tw.div`
flex 
ml-2 
md:mr-24
`

export const BrandText = tw.span`
self-center 
text-xl 
font-semibold 
sm:text-2xl 
whitespace-nowrap 
text-white

`
export const ContainerDropdown = tw.div`
flex 
items-center
`
export const ContentDropdown = tw.div`
flex 
items-center 
ml-3
`

export const Name = tw.span`
block 
text-sm
text-white

`
export const Email = tw.span`
block 
truncate 
text-sm
font-medium
text-white
`
export const NavigationItem = tw(Dropdown.Item)`
text-white 
transition-colors
duration-500
focus:bg-gray-700
hover:bg-gray-700

`

export const ButtonSidebar = tw.button`
inline-flex 
items-center 
p-2 text-sm 
rounded-lg 
sm:hidden 
focus:ring-2 
focus:ring-gray-600
text-gray-400 
hover:bg-gray-700
`

export const MenuIcon = tw(BiMenuAltLeft)`
text-2xl
`

export const CloseIcon = tw(IoCloseSharp)`
text-2xl
`
