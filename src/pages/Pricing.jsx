import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

function Pricing() {
  const navigate = useNavigate()
  const plans = [
    { name: 'Starter', price: '$9/mo' },
    { name: 'Pro', price: '$29/mo' },
    { name: 'Enterprise', price: '$99/mo' },
  ]

  const handlePlanClick = (plan) => {
    ReactGA.event({
      category: 'conversion',
      action: 'plan_selected',
      label: plan
    })
    navigate('/signup')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-8">Pricing</h1>
      <div className="flex gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow-md p-8 w-48 flex flex-col items-center">
            <h3 className="text-xl font-bold text-gray-700 mb-2">{plan.name}</h3>
            <p className="text-blue-600 text-2xl font-semibold mb-6">{plan.price}</p>
            <button
              onClick={() => handlePlanClick(plan.name)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing