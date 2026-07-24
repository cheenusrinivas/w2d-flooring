'use client'

import { useState, useEffect } from 'react'

const reviews = [
  { name: 'Sarah M.', location: 'Dublin', text: 'Absolutely brilliant service. Des and his team transformed our living room. The hardwood floor looks stunning!', rating: 5 },
  { name: 'John K.', location: 'Wicklow', text: 'Professional, punctual and great value. Would highly recommend W2D to anyone looking for quality flooring.', rating: 5 },
  { name: 'Maria C.', location: 'Bray', text: 'From consultation to completion, everything was seamless. The carpet they fitted is exactly what we wanted.', rating: 5 },
  { name: 'Paul D.', location: 'Greystones', text: 'Used W2D for our office renovation. Exceptional finish and completed ahead of schedule. Highly recommend!', rating: 5 },
  { name: 'Claire B.', location: 'Dún Laoghaire', text: 'Des was so helpful from start to finish. The vinyl flooring in our kitchen looks amazing. Great price too!', rating: 5 },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  const next = () => setCurrent((c) => (c + 1) % reviews.length)

  return (
    <section id="reviews" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4">What Customers Say</p>
        <h2 className="text-4xl font-bold text-white mb-16">Reviews</h2>

        <div className="relative">
          {/* Main review card */}
          <div className="bg-zinc-900 border border-yellow-700/30 rounded-2xl p-10 mx-auto max-w-2xl">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: reviews[current].rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">★</span>
              ))}
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
              "{reviews[current].text}"
            </p>
            <div>
              <div className="font-bold text-white text-lg">{reviews[current].name}</div>
              <div className="text-yellow-500 text-sm mt-1">{reviews[current].location}</div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-600 hover:bg-yellow-500 text-black w-10 h-10 rounded-full font-bold transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-600 hover:bg-yellow-500 text-black w-10 h-10 rounded-full font-bold transition-colors"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-yellow-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}