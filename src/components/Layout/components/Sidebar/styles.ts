import tw from 'tailwind-styled-components'

export const Container = tw.aside`
fixed 
top-0 
left-0 
z-40 
w-64 
h-screen 
pt-20 
transition-transform 
-translate-x-full 
border-r 
sm:translate-x-0 
bg-gray-800 
border-gray-700


`
export const ContainerGroupItems = tw.div`
h-full 
px-3 
pb-4 
overflow-y-auto 
bg-gray-800
`

export const GroupItems = tw.ul`
space-y-2 
font-medium

`
