import tw from 'tailwind-styled-components'
export const Container = tw.section`
flex
justify-center
items-center
py-3
`
export const ContainerPreviousButton = tw.div`

`
export const PreviousButton = tw.button`
flex 
items-center 
justify-center 
px-3 
h-8 ml-0 
leading-tight  
border 
rounded-l-lg  
bg-gray-800 
border-gray-700 
text-gray-400 
hover:bg-gray-700 
hover:text-white
cursor-pointer
${({ disabled }) =>
  disabled && 'hover:bg-gray-800 hover:text-gray-400 cursor-default'}
`

export const ContainerNextButton = tw.div`

`
export const NextButton = tw.button`
flex 
items-center 
justify-center
px-3 
h-8
leading-tight 
border 
rounded-r-lg 
bg-gray-800 
border-gray-700 
text-gray-400 
hover:bg-gray-700
hover:text-white
${({ disabled }) =>
  disabled && 'hover:bg-gray-800 hover:text-gray-400 cursor-default'}
`
