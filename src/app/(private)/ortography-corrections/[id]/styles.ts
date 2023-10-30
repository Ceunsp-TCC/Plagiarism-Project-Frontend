import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const ContainerLoading = tw.div`
flex
items-center
justify-center

`

export const LoadingWrapper = tw.div`
w-80
`

export const Container = tw.section`
mt-16

`

export const Identifier = tw.h2`
text-2xl
text-white
mb-7
font-semibold
`

export const ContainerButtons = tw.div`
flex
flex-row
justify-end
gap-4
mb-14

`
export const ButtonWrapper = tw.div`
w-40
`

export const ButtonCustom = tw(Button)<{ isActive: boolean }>`
text-sm
h-12
${({ isActive }) => isActive && 'pointer-events-none  opacity-50'}
`
export const ContainerFile = tw.div``

export const File = tw.iframe`
w-full
h-[53rem]
`
