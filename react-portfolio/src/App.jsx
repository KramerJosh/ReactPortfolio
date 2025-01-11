import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </>
  )
}

export default App
