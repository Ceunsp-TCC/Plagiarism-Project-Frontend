import tw from 'tailwind-styled-components'

export const Container = tw.section`
flex
gap-3
`

export const Button = tw.button<{ $note: number; $isSelected: boolean }>`
text-white
border-2
border-white
bg-gray-800
p-5
rounded-lg
text-xl
font-semibold
opacity-50
transition-all
duration-300
hover:opacity-100
${({ $isSelected }) => $isSelected && 'opacity-100'}


${({ $note }) => {
  const isRed = $note <= 5
  const isMedium = $note >= 6 && $note <= 7
  const isHigh = $note >= 8

  if (isRed) {
    return 'bg-red-500 border-red-600'
  }
  if (isMedium) {
    return 'bg-blue-500 border-blue-600'
  }
  if (isHigh) {
    return 'bg-green-500 border-green-600'
  }
}}

`
