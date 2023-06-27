import tw from 'tailwind-styled-components'
import { BsCheckSquareFill } from 'react-icons/bs'

export const Container = tw.div`
w-auto 
p-2
`
export const Badge = tw.div`
flex 
flex-wrap 
px-3 py-2
bg-gray-800 
 rounded-full
`

export const ContainerIcon = tw.div`
w-auto 
mr-2
pt-1
`
export const CheckboxIcon = tw(BsCheckSquareFill)`
fill-blue-500
text-sm

`

export const ContainerText = tw.div`
flex-1
`

export const Text = tw.p`
text-sm 
text-gray-200 
font-bold
`
