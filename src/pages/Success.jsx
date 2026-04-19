import { useNavigate } from 'react-router-dom'

function Success() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-10 text-center">
        <h1 className="text-5xl mb-4">🎉</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">You're in!</h2>
        <p className="text-gray-500 mb-6">Your account has been created successfully.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Success