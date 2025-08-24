import React, { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: true,
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = "Please enter your name"
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Enter a valid email"
    if (form.phone && !/^[0-9+\-\s()]{7,}$/.test(form.phone)) e.phone = "Enter a valid phone"
    if (!form.subject.trim()) e.subject = "Please add a subject"
    if (form.message.trim().length < 10) e.message = "Message should be at least 10 characters"
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const eObj = validate()
    setErrors(eObj)
    if (Object.keys(eObj).length) return
    // pretend send...
    toast.success("Thanks! We received your message.")
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: true,
    })
  }

  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px]">
        <img
          src="https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">Contact Us</h1>
          <p className="text-white/90 max-w-2xl">
            Questions, feedback, or custom orders — we’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg">Our Office</h3>
            </div>
            <p className="text-gray-600">
              Kitchen Accessories HQ<br />Main Boulevard, City, Pakistan
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg">Call / WhatsApp</h3>
            </div>
            <p className="text-gray-600">+92 300 1234567<br />Mon–Sat, 10:00–20:00</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg">Email</h3>
            </div>
            <p className="text-gray-600">support@kitchenstore.pk<br />We reply within 24 hours</p>
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${errors.name ? "border-red-400" : "border-gray-200"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-400" : "border-gray-200"}`}
                    placeholder="name@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${errors.phone ? "border-red-400" : "border-gray-200"}`}
                    placeholder="+92 3XX XXXXXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${errors.subject ? "border-red-400" : "border-gray-200"}`}
                    placeholder="e.g., Bulk order, Return, Inquiry"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-primary ${errors.message ? "border-red-400" : "border-gray-200"}`}
                  placeholder="Write your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  I agree to be contacted regarding my inquiry and receive updates.
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map + Hours */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border shadow-sm bg-white">
              <iframe
                title="Store Location"
                className="w-full h-[320px]"
                src="https://www.google.com/maps?q=lahore&output=embed"
                loading="lazy"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Store Hours</h3>
              </div>
              <ul className="text-gray-600 text-sm leading-7">
                <li>Mon – Sat: 10:00 AM – 8:00 PM</li>
                <li>Sunday: 12:00 PM – 6:00 PM</li>
                <li>Public Holidays: Limited hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Light) */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <details className="bg-white rounded-xl border p-5 hover:shadow-sm transition">
              <summary className="cursor-pointer font-semibold text-gray-800">How long does delivery take?</summary>
              <p className="mt-3 text-gray-600 text-sm">
                Within major cities 2–3 days; other areas 3–5 working days.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:shadow-sm transition">
              <summary className="cursor-pointer font-semibold text-gray-800">What is your return policy?</summary>
              <p className="mt-3 text-gray-600 text-sm">
                7-day easy returns on unopened/unused items with original packaging.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:shadow-sm transition">
              <summary className="cursor-pointer font-semibold text-gray-800">Do you offer bulk/wholesale?</summary>
              <p className="mt-3 text-gray-600 text-sm">
                Yes, contact us with your requirements for a custom quotation.
              </p>
            </details>
            <details className="bg-white rounded-xl border p-5 hover:shadow-sm transition">
              <summary className="cursor-pointer font-semibold text-gray-800">Which payment methods are accepted?</summary>
              <p className="mt-3 text-gray-600 text-sm">
                COD, bank transfer, and selected cards via secure gateway.
              </p>
            </details>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  )
}

export default Contact