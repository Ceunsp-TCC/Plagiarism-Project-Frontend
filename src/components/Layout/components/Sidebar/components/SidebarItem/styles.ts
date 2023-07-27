import tw from 'tailwind-styled-components'
import Link from 'next/link'
export const Li = tw.li``

export const LinkCustom = tw(Link)`
flex 
items-center 
p-2 
rounded-lg 
text-white  
hover:bg-gray-700 
group
`

export const Label = tw.span`
ml-3
`
