import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center p-8">
      {/* Grid Layout - 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full">
        
        {/* Card 1 - New York */}
        <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl">
          <div className="relative h-[580px] rounded-[2.2rem] overflow-hidden">
            {/* Imagen de fondo */}
            <Image
              src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="New York City"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Corazón superior derecho */}
            <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            {/* Contenido - Flex Layout */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-bold text-white">New York</h2>
                <p className="text-gray-300 text-sm">Economy</p>
              </div>
              
              {/* Info de vuelo - Flex row */}
              <div className="flex flex-row items-center gap-6 text-white mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="text-sm">from $120</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-sm font-semibold">JFK</span>
                </div>
              </div>
              
              {/* Botón */}
              <button className="w-full bg-white text-gray-800 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-all">
                Search flight
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 - San Francisco */}
        <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl">
          <div className="relative h-[580px] rounded-[2.2rem] overflow-hidden bg-white">
            {/* Imagen */}
            <div className="relative h-[300px] rounded-[2rem] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Golden Gate Bridge San Francisco"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Contenido - Flex Layout */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="text-4xl font-bold text-gray-900">San Francisco</h2>
                <p className="text-gray-400 text-sm">Premium economy</p>
              </div>
              
              {/* Info de vuelo - Flex row con wrap */}
              <div className="flex flex-row flex-wrap items-center gap-6 text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span className="text-sm">from $240</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-sm font-semibold">SFO</span>
                </div>
              </div>
              
              {/* Botón y corazón - Flex row */}
              <div className="flex flex-row items-center gap-3">
                <button className="flex-1 bg-gray-900 text-white py-3.5 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Search flight
                </button>
                <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
