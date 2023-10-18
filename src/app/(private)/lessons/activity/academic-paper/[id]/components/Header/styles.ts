import tw from 'tailwind-styled-components'
import { Button } from '@components'

export const Container = tw.section`
grid-cols-4
mt-8
mb-20
`

export const WrapperButton = tw.div`
col-span-1
w-60
`

export const ButtonCustom = tw(Button)`
text-sm
h-12
`
