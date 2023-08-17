import tw from 'tailwind-styled-components'
export const ContainerSelect = tw.div`
relative
`

export const Select = tw.select<{
  $hasError: boolean
}>`
appearance-none  
text-lg
text-gray-500 
font-bold
bg-gray-800
placeholder-gray-500 
outline-none
border 
border-gray-700 
focus:ring-4
focus:ring-blue-200 
rounded-full
px-6 py-3.5 w-full
${({ $hasError }) =>
  $hasError ? 'ring-2 ring-red-600 focus:ring-red-600' : ''}
  `
export const ContainerLabel = tw.div`
mb-[14px]

`
export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
