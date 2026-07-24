export default function Footer() {
    return (
      <footer className="bg-black border-t border-yellow-700/30 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-2xl font-bold text-yellow-500 tracking-widest">W2D</div>
            <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Des O'Briens Flooring & Carpets</div>
          </div>
  
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-yellow-500 transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-yellow-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </div>
  
          <div className="text-xs text-gray-600 text-center">
            © 2026 W2D Flooring & Carpets. All rights reserved.<br />
            <span className="text-gray-700">Website by Salt Corp Solutions</span>
          </div>
        </div>
      </footer>
    )
  }
  