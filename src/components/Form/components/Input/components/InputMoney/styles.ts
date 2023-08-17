import tw from 'tailwind-styled-components'
import CurrencyInput from 'react-currency-input-field'

export const InputMoney = tw(CurrencyInput)<{
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
px-6 
py-[15px]
w-full
${({ $hasError }) =>
  $hasError ? 'ring-4 ring-red-600 focus:ring-red-600' : ''}
`

export const ContainerErrorMessage = tw.div`
ml-4
mt-1
`
