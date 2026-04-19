import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

function Features() {
  const navigate = useNavigate()
  const features = ['Real-time Tracking', 'Funnel Analysis', 'A/B Testing']

  const handleFeatureClick = (feature) => {
    ReactGA.event({
      category: 'engagement',
      action: 'feature_click',
      label: feature
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Features</h1>
      <div className="flex gap-6 mb-12">
        {features.map((f) => (
          <div
            key={f}
            onClick={() => handleFeatureClick(f)}
            className="bg-white rounded-lg shadow-md p-6 w-48 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{f}</h3>
            <p className="text-gray-400 text-sm">Description of {f}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/pricing')}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        See Pricing
      </button>
    </div>
  )
}

export default Features