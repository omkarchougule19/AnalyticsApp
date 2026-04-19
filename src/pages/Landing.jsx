import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

function Landing() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    ReactGA.event({
      category: 'engagement',
      action: 'click',
      label: 'get_started_button'
    })
    navigate('/features')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to AnalyticsApp</h1>
      <p className="text-xl text-gray-500 mb-8">Track user behavior and boost conversions.</p>
      <button
        onClick={handleGetStarted}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  )
}

export default Landing