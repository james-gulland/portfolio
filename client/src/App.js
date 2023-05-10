import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Spectrum from './components/Spectrum'

// scrolls page to top when loading the page
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {

  return (
    <div className='site-wrapper'>  
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/spectrum" element={<Spectrum />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
