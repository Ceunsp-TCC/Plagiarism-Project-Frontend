import tw from 'tailwind-styled-components'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'

export const ContainerMaster = tw.div<{ $openAccordion: boolean }>`
w-full
border
border-gray-500
rounded-lg
transition-all
delay-700
${({ $openAccordion }) => ($openAccordion ? 'h-auto' : 'h-[45px]')}
`
export const ContainerTitle = tw.div<{ $openAccordion: boolean }>`
flex
justify-between
items-center

p-2
w-full
${({ $openAccordion }) => $openAccordion && 'border-b border-gray-500'}
`

export const Title = tw.div`
text-white
text-xl
font-bold
`

export const ContainerContent = tw.div<{ $openAccordion: boolean }>`
text-white
overflow-auto
mt-5
px-2
mb-2
${({ $openAccordion }) => ($openAccordion ? 'visible' : 'hidden')}
`

export const IconArrowDown = tw(AiOutlineDown)`
text-white
text-xl
`

export const IconArrowUp = tw(AiOutlineUp)`
text-white
text-xl
`

export const ButtonIcon = tw.button``
