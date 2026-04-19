import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [formStarted, setFormStarted] = useState(false)

  const handleChange = (e) => {
    if (!formStarted) {
      ReactGA.event({
        category: 'engagement',
        action: 'form_start',
        label: 'signup_form'
      })
      setFormStarted(true)
    }
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (form.name && form.email && form.password) {
      ReactGA.event({
        category: 'conversion',
        action: 'signup_complete',
        label: 'signup_form'
      })
      navigate('/success')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-10 w-96">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default Signup