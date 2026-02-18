import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 flex items-center justify-center p-4 sm:p-8">
      {/* Grid Layout - 2 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl w-full">
        
        {/* Card 1 - New York */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2.5rem] overflow-hidden shadow-xl h-[600px] flex flex-col">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="New York City"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          {/* Contenido - Flex Layout */}
          <div className="relative flex flex-col justify-end h-full p-8 z-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold text-white tracking-tight">New York</h2>
              <p className="text-gray-300 text-base">Economy</p>
            </div>
            
            {/* Info de vuelo - Flex row */}
            <div className="flex flex-row items-center gap-6 text-white mt-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-base">from $120</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-base font-semibold">JFK</span>
              </div>
            </div>
            
            {/* Botón */}
            <button className="w-full bg-white/95 text-gray-800 py-4 rounded-full font-medium hover:bg-white transition-all shadow-lg">
              Search flight
            </button>
          </div>
        </div>

        {/* Card 2 - San Francisco */}
        <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2.5rem] overflow-hidden shadow-xl h-[600px] flex flex-col">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Golden Gate Bridge San Francisco"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
          </div>
          
          {/* Contenido - Flex Layout */}
          <div className="relative flex flex-col justify-end h-full p-8 z-10">
            <div className="flex flex-col gap-3">
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">San Francisco</h2>
              <p className="text-gray-600 text-base">Premium economy</p>
            </div>
            
            {/* Info de vuelo - Flex row con wrap */}
            <div className="flex flex-row flex-wrap items-center gap-6 text-gray-800 mt-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-base">from $240</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="text-base font-semibold">SFO</span>
              </div>
            </div>
            
            {/* Botón y corazón - Flex row */}
            <div className="flex flex-row items-center gap-3">
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg">
                Search flight
              </button>
              <button className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg">
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
