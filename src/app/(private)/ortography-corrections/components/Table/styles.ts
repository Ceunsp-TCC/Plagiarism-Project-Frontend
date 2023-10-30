import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const FiltersContainer = tw.div`
mb-7

`

export const PaginationContainer = tw.div`
flex
w-full
justify-end

`
export const ButtonWrapper = tw.div`
w-40
flex
justify-end

`

export const ButtonCustom = tw(Button)`
text-sm
h-12
`
