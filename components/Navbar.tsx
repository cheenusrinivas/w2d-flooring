'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-yellow-700/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-bold text-yellow-500 tracking-widest">W2D</span>
          <span className="text-xs text-gray-400 tracking-widest uppercase">Flooring & Carpets</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#services" className="hover:text-yellow-500 transition-colors">Services</Link>
          <Link href="#gallery" className="hover:text-yellow-500 transition-colors">Gallery</Link>
          <Link href="#reviews" className="hover:text-yellow-500 transition-colors">Reviews</Link>
          <Link href="#contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
          <Link
            href="https://wa.me/353857553436?text=Hi%20Des%2C%20I%27d%20like%20to%20get%20a%20free%20quote%20for%20flooring.%20Could%20you%20help%3F"
            target="_blank"
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-yellow-700/30 px-6 py-4 flex flex-col gap-4 text-sm text-gray-300">
          <Link href="#services" onClick={() => setOpen(false)} className="hover:text-yellow-500">Services</Link>
          <Link href="#gallery" onClick={() => setOpen(false)} className="hover:text-yellow-500">Gallery</Link>
          <Link href="#reviews" onClick={() => setOpen(false)} className="hover:text-yellow-500">Reviews</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-yellow-500">Contact</Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="bg-yellow-600 text-black font-semibold px-5 py-2 rounded text-center">Book Now</Link>
        </div>
      )}
    </nav>
  )
}