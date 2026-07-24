export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4">
          Wicklow to Dublin
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          Des O'Briens
          <span className="block text-yellow-500">W2D Flooring</span>
          <span className="block text-3xl sm:text-4xl font-light text-gray-300 mt-2">
            & Carpets
          </span>
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Premium flooring and carpet installation across Wicklow and Dublin.
          Quality craftsmanship, trusted by homeowners and businesses alike.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <a href="#contact"
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded transition-colors text-lg"
          >
            Book a Free Quote
          </a>
          
            <a href="#services"
            className="border border-yellow-600 hover:border-yellow-400 text-yellow-500 hover:text-yellow-400 font-semibold px-8 py-4 rounded transition-colors text-lg"
          >
            Our Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">10+</div>
            <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">500+</div>
            <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Projects Done</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">5★</div>
            <div className="text-xs text-gray-300 mt-1 uppercase tracking-wider">Rated Service</div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  )
}