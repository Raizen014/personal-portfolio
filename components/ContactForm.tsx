'use client'

import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    emailjs
      .sendForm(
        'service_mu039io',
        'template_tix9zqt',
        form.current!,
        'HcEfDTyVokSt7MuQo'
      )
      .then(() => {
        form.current?.reset()
        setSuccess(true)
        setIsLoading(false)
        setTimeout(() => setSuccess(false), 5000)
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        alert('Something went wrong 😢')
        setIsLoading(false)
      })
  }

  return (
    <div className="relative">
      {/* Success alert at the top */}
      {success && (
        <div
          role="alert"
          className="alert alert-success fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-fit shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Your message has been sent successfully!</span>
        </div>
      )}

      <div
        id="contact"
        className="py-12 px-6 bg-base-200 text-center flex items-center justify-center"
      >
        <div className="w-full max-w-md">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 bg-white p-8 md:p-10 rounded-xl shadow-lg text-left"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="input input-bordered bg-gray-200 text-black w-full"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Address"
              className="input input-bordered bg-gray-200 text-black w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="textarea textarea-bordered bg-gray-200 text-black w-full"
              required
            ></textarea>

            {/* Submit button with loading indicator */}
            <button type="submit" className="btn btn-accent w-full" >
              {isLoading ? (
                <>
                  Sending
                  <span className="loading loading-dots loading-md ml-2"></span>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
