import React from 'react'
import {Header, Contact, Footer, About, Experience, Testimonials, Nav, Portofolio, Services} from '../src/components/ComponentExports'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App