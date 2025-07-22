'use client'

import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const modalRef = useRef<HTMLInputElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_mu039io',       // Your EmailJS service ID
        'template_tix9zqt',      // Your EmailJS template ID
        form.current!,           // The form reference
        'HcEfDTyVokSt7MuQo'      // Your public key
      )
      .then(() => {
        form.current?.reset()
        // Small timeout to ensure modal triggers correctly
        setTimeout(() => {
          if (modalRef.current) modalRef.current.checked = true
        }, 0)
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        alert('Something went wrong 😢')
      })
  }

  return (
    <div
      id="contact"
      className="py-24 px-6 bg-base-200 text-center flex items-center justify-center"
    >
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-accent">Contact</h2>

        {/* === Contact Form === */}
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
          <button type="submit" className="btn btn-accent w-full">
            Send Message
          </button>
        </form>
      </div>

      {/* === Modal Hidden Checkbox === */}
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        ref={modalRef}
      />
      <div className="modal" role="dialog">
        <div className="modal-box text-center bg-neutral text-white">
          <h3 className="font-bold text-lg">Message Sent!</h3>
          <p className="py-4">Thank you! I’ll get back to you soon.</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  )
}
