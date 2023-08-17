import tw from 'tailwind-styled-components'

export const TextArea = tw.textarea<{
  $resizeDisabled: boolean
  $hasError: boolean
}>`
appearance-none  
text-base
text-gray-500 
font-bold
bg-gray-800
placeholder-gray-500 
outline-none
border 
border-gray-700 
focus:ring-4
focus:ring-blue-200 
rounded-lg
px-3 py-3.5 w-full
${({ $hasError }) =>
  $hasError ? 'ring-4 ring-red-600 focus:ring-red-600' : ''}
${({ $resizeDisabled }) => $resizeDisabled && 'resize-none'}
`

export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
