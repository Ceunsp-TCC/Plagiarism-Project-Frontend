import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const PaginationContainer = tw.div`
flex
w-full
justify-end
mt-5
`

export const ButtonWrapper = tw.div`
w-36
flex
justify-end

`
export const ButtonCustom = tw(Button)`
text-sm
h-12
`
