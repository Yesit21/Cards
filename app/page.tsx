export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
      {/* Grid Layout - 2 columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        
        {/* Card 1 - New York */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          {/* Imagen */}
          <div className="relative h-80 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80" 
              alt="New York"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </div>
          
          {/* Contenido - Flex Layout */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-white">New York</h2>
              <p className="text-gray-300 text-sm">Economy</p>
            </div>
            
            {/* Info de vuelo - Flex row */}
            <div className="flex flex-row items-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-lg">from $120</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-lg font-semibold">JFK</span>
              </div>
            </div>
            
            {/* Botón */}
            <button className="w-full bg-white text-black py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Search flight
            </button>
          </div>
        </div>

        {/* Card 2 - San Francisco */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          {/* Imagen */}
          <div className="relative h-80 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80" 
              alt="San Francisco"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
          </div>
          
          {/* Contenido - Flex Layout */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-gray-900">San Francisco</h2>
              <p className="text-gray-500 text-sm">Premium economy</p>
            </div>
            
            {/* Info de vuelo - Flex row con wrap */}
            <div className="flex flex-row flex-wrap items-center gap-4 text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-lg">from $240</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-lg font-semibold">SFO</span>
              </div>
            </div>
            
            {/* Botón y corazón - Flex row con justify-between */}
            <div className="flex flex-row items-center gap-3">
              <button className="flex-1 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Search flight
              </button>
              <button className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
