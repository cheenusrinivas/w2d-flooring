export default function Gallery() {
    const items = [
      { type: 'image', src: '/gallery/floor1.jpg', caption: 'Hardwood Installation' },
      { type: 'image', src: '/gallery/floor2.jpg', caption: 'Carpet Fitting' },
      { type: 'image', src: '/gallery/floor3.jpg', caption: 'Vinyl Flooring' },
      { type: 'video', src: '/videos/project1.mp4', caption: 'Recent Project' },
      { type: 'image', src: '/gallery/floor4.jpg', caption: 'Tile Installation' },
      { type: 'video', src: '/videos/project2.mp4', caption: 'Commercial Project' },
    ]
  
    return (
      <section id="gallery" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4">Our Work</p>
            <h2 className="text-4xl font-bold text-white">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg aspect-square bg-zinc-800">
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Photo coming soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  