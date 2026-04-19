import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

function LandingB() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    ReactGA.event({
      category: 'engagement',
      action: 'click',
      label: 'start_free_trial_button' // different label so you can track it separately
    })
    navigate('/features')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to AnalyticsApp</h1>
      <p className="text-xl text-gray-500 mb-8">Track user behavior and boost conversions.</p>
      <button
        onClick={handleGetStarted}
        className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700"
      >
        Start Free Trial
      </button>
    </div>
  )
}

export default LandingB