import tw from 'tailwind-styled-components'

export const PageButton = tw.button<{ $isActive: boolean }>`
flex 
items-center 
justify-center 
px-3 
h-8 
leading-tight   
border 
bg-gray-800 
border-gray-700 
text-gray-400 
hover:bg-gray-700 
hover:text-white
${({ $isActive }) => $isActive && 'bg-gray-700'}
`
