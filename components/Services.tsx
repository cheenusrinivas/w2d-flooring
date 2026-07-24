export default function Services() {
    return (
      <section id="services" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="text-4xl font-bold text-white mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Hardwood Flooring', desc: 'Premium hardwood installation for homes and businesses across Wicklow and Dublin.' },
              { title: 'Carpet Installation', desc: 'Wide range of carpets fitted professionally to the highest standard.' },
              { title: 'Vinyl & Laminate', desc: 'Durable, stylish vinyl and laminate options for every budget.' },
              { title: 'Tiles & Stone', desc: 'Expert tiling for kitchens, bathrooms, and living spaces.' },
              { title: 'Free Consultation', desc: 'We come to you — free measuring and quotation service.' },
              { title: 'Commercial Projects', desc: 'Large-scale flooring solutions for offices, retail, and hospitality.' },
            ].map((s) => (
              <div key={s.title} className="bg-black border border-yellow-700/30 rounded-lg p-8 text-left hover:border-yellow-500 transition-colors">
                <div className="w-10 h-1 bg-yellow-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }