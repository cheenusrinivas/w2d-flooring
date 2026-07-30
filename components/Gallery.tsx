'use client'

import { useState } from 'react'

const items = [
  { id: 1, label: 'Hardwood Installation', location: 'Dublin', type: 'Hardwood' },
  { id: 2, label: 'Carpet Fitting', location: 'Wicklow', type: 'Carpet' },
  { id: 3, label: 'Vinyl Flooring', location: 'Bray', type: 'Vinyl' },
  { id: 4, label: 'Tile Installation', location: 'Dublin', type: 'Tiles' },
  { id: 5, label: 'Laminate Flooring', location: 'Greystones', type: 'Laminate' },
  { id: 6, label: 'Carpet Fitting', location: 'Wicklow', type: 'Carpet' },
]

const filters = ['All', 'Hardwood', 'Carpet', 'Vinyl', 'Tiles', 'Laminate']

type ViewMode = 'grid' | 'two' | 'list'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [view, setView] = useState<ViewMode>('grid')

  const filtered = active === 'All' ? items : items.filter((i) => i.type === active)

  const gridClass = {
    grid: 'grid grid-cols-3 gap-4',
    two: 'grid grid-cols-2 gap-4',
    list: 'grid grid-cols-1 gap-4',
  }[view]

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-yellow-500 text-xs tracking-[0.5em] uppercase mb-4">Our Work</p>
          <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Every floor tells a story. Here are some of our recent installations across Wicklow and Dublin.
          </p>
        </div>

        {/* Filters + View toggle */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                  active === f
                    ? 'bg-yellow-600 border-yellow-600 text-black font-bold'
                    : 'border-yellow-700/30 text-gray-400 hover:border-yellow-500 hover:text-yellow-500'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* View mode toggle */}
          <div className="flex gap-2 border border-yellow-700/30 rounded-lg p-1">
            <button
              onClick={() => setView('list')}
              title="List view"
              className={`px-3 py-1.5 rounded text-xs transition-all duration-300 ${
                view === 'list' ? 'bg-yellow-600 text-black' : 'text-gray-400 hover:text-yellow-500'
              }`}
            >
              ☰
            </button>
            <button
              onClick={() => setView('two')}
              title="2-column view"
              className={`px-3 py-1.5 rounded text-xs transition-all duration-300 ${
                view === 'two' ? 'bg-yellow-600 text-black' : 'text-gray-400 hover:text-yellow-500'
              }`}
            >
              ⊞
            </button>
            <button
              onClick={() => setView('grid')}
              title="Grid view"
              className={`px-3 py-1.5 rounded text-xs transition-all duration-300 ${
                view === 'grid' ? 'bg-yellow-600 text-black' : 'text-gray-400 hover:text-yellow-500'
              }`}
            >
              ⊟
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={gridClass}>
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-xl bg-zinc-900 border border-yellow-700/20 hover:border-yellow-500/50 transition-all duration-300 ${
                view === 'list' ? 'flex gap-4 items-center p-4' : ''
              }`}
            >
              {view === 'list' ? (
                <>
                  <div className="w-20 h-20 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-3xl">🪵</span>
                  </div>
                  <div>
                    <span className="text-yellow-500 text-xs tracking-widest uppercase">{item.type}</span>
                    <h3 className="text-white font-bold text-base mt-1">{item.label}</h3>
                    <p className="text-gray-500 text-sm mt-1">📍 {item.location}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="aspect-square flex items-center justify-center bg-zinc-800">
                    <div className="text-center">
                      <div className="text-5xl mb-3">🪵</div>
                      <p className="text-gray-600 text-xs tracking-wide">Photo coming soon</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <span className="text-yellow-500 text-xs tracking-widest uppercase">{item.type}</span>
                      <h3 className="text-white font-bold text-lg mt-1">{item.label}</h3>
                      <p className="text-gray-400 text-sm mt-1">📍 {item.location}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Want to see more of our work?</p>
          
            <a href="https://www.instagram.com/w2d_flooring_carpets_"
            target="_blank"
            className="inline-block border border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black text-xs tracking-[0.3em] uppercase px-8 py-3 rounded transition-all duration-300"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}