export default function About() {
    return (
      <section className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  
            {/* Left — Text */}
            <div>
              <p className="text-yellow-500 text-xs tracking-[0.5em] uppercase mb-4">About Us</p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Wicklow to Dublin — Quality You Can Walk On
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Des O'Brien has been fitting floors across Wicklow and Dublin for over a decade. 
                From hardwood to carpet, vinyl to tiles — every job is treated with the same 
                care and attention to detail as the last.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                W2D Flooring & Carpets was built on word of mouth and repeat customers. 
                No shortcuts, no compromises — just honest work done right.
              </p>
  
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '10+', label: 'Years Experience' },
                  { number: '500+', label: 'Jobs Completed' },
                  { number: '5★', label: 'Rated Service' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l border-yellow-700/30 pl-4">
                    <div className="text-2xl font-bold text-yellow-500">{stat.number}</div>
                    <div className="text-xs text-gray-500 tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Right — Placeholder image */}
            <div className="relative">
              <div className="bg-zinc-800 rounded-xl aspect-square flex items-center justify-center border border-yellow-700/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🪵</div>
                  <p className="text-gray-600 text-sm tracking-wide">Photo coming soon</p>
                </div>
              </div>
              {/* Gold accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-yellow-700/30 rounded-xl -z-10" />
            </div>
  
          </div>
        </div>
      </section>
    )
  }