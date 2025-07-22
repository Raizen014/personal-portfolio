'use client'

import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_mu039io',      
      'template_tix9zqt',  
      form.current!,
      'HcEfDTyVokSt7MuQo'    
    )
      .then(() => {
        setSuccess(true)
        form.current?.reset()
      })
      .catch((error) => {
        console.error(error)
        alert('Something went wrong.')
      })
  }

 return (
    <div id="contact" className="py-24 px-6 bg-base-200 text-center flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 bg-white p-8 md:p-10 rounded-xl shadow-lg text-left"
        >
          <input
            type="text"
            name="from_name" // Match EmailJS variable
            placeholder="Name"
            className="input input-bordered bg-gray-200 text-black w-full"
            required
          />
          <input
            type="email"
            name="from_email" // Match EmailJS variable
            placeholder="Email Address"
            className="input input-bordered bg-gray-200 text-black w-full"
            required
          />
          <textarea
            name="message" // Match EmailJS variable
            placeholder="Your Message"
            rows={5}
            className="textarea bg-gray-200 text-black textarea-bordered w-full"
            required
          ></textarea>
          <button type="submit" className="btn btn-accent w-full">
            Send Message
          </button>
          {success && (
            <p className="text-success text-center pt-2">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  )
}
