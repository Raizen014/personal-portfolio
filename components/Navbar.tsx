'use client'
import { useTheme } from '@/components/ThemeProvider'
import Image from 'next/image'
import { useState } from 'react'



export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar bg-base-200 px-4 top-0 sticky z-50 shadow-md ">
      <div className="flex-1 ">
        <div className='flex gap-2 items-center'>
          <div>
            {theme === 'dark' ? (
              <Image src="/logo.png" width={48} height={48} alt="logo" />
            ) : (
              <Image src="/logo-dark.png" width={48} height={48} alt="logo" />
            )}

          </div>
          <a href="#home" className="text-xl text-accent hover:drop-shadow-glow transition duration-300 font-medium">AeronG</a>
        </div>
      </div>

      <div className="flex-none">
        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />

            {/* Sun icon */}
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M5.64 17l-.71.71a1 1 0 0 0 1.41 1.41l.71-.71a1 1 0 0 0-1.41-1.41ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 1 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.71.71a1 1 0 0 0 0 1.41A1 1 0 0 0 17.66 7.34ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2a1 1 0 0 0-1.41 1.41l.71.71a1 1 0 0 0 1.41-1.41ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Zm0 9A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-on fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05ZM12.14 19.69A8.14 8.14 0 0 1 7.08 5.22v.27A10.15 10.15 0 0 0 17.22 15.63a9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.28Z" />
            </svg>
          </label>
          <label
            tabIndex={0}
            className="btn btn-ghost"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
         {menuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-2">
          <a href="#home" className="btn btn-ghost">Home</a>
          <a href="#about" className="btn btn-ghost">About</a>
          <a href="#projects" className="btn btn-ghost">Projects</a>
          <a href="#contact" className="btn btn-accent">Contact</a>
          <label className="swap swap-rotate mx-4 ">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />

            {/* Sun icon */}
            <svg
              className="swap-off fill-current w-6 h-6 duration-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M5.64 17l-.71.71a1 1 0 0 0 1.41 1.41l.71-.71a1 1 0 0 0-1.41-1.41ZM5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Zm7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 1 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.71.71a1 1 0 0 0 0 1.41A1 1 0 0 0 17.66 7.34ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Zm-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1Zm6.36-2a1 1 0 0 0-1.41 1.41l.71.71a1 1 0 0 0 1.41-1.41ZM12 6.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Zm0 9A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5Z" />
            </svg>

            {/* Moon icon */}
            <svg
              className="swap-on fill-current w-6 h-6  duration-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05ZM12.14 19.69A8.14 8.14 0 0 1 7.08 5.22v.27A10.15 10.15 0 0 0 17.22 15.63a9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.28Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  )
}
