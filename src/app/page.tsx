import {
  Navbar,
  Hero,
  Feature,
  Contact,
  Footer,
  Statistics,
} from '@/app/(components-landing-page)'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Statistics />
      <Contact />
      <Footer />
    </>
  )
}
