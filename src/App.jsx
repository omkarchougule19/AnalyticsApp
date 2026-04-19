import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import Landing from './pages/Landing'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Signup from './pages/Signup'
import Success from './pages/Success'
import LandingB from './pages/LandingB'

function PageTracker() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname })
  }, [location])
  return null
}

function LandingRouter() {
  const variant = Math.random() < 0.5 ? 'A' : 'B'

  ReactGA.event({
    category: 'experiment',
    action: 'variant_assigned',
    label: variant
  })

  return variant === 'A' ? <Landing /> : <LandingB />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingRouter />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App