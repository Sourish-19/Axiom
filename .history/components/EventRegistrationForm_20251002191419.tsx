import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RegistrationForm = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          toast.success("Registration submitted successfully")
          form.current?.reset()
        },
        () => {
          toast.error("Failed to submit registration. Please try again.")
        }
      )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Event Registration
        </h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="email"
          name="regEmail"
          placeholder="Email"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="university"
          placeholder="University"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          name="event"
          placeholder="Event"
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default RegistrationForm
