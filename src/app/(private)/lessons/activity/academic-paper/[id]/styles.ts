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

export const WrapperContent = tw.div`
flex
gap-10
w-full
h-auto
`
export const ButtonCustom = tw(Button)`
text-sm
h-12

`

export const ContainerAvaliationDownload = tw.div`
flex
justify-between
`
