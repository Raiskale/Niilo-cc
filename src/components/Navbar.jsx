import { useState } from 'react'

function Navbar() {
  const [valikkoAuki, setValikkoAuki] = useState(false)

  return (
    <header className="font-nav absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,rgba(6,10,20,0.28),rgba(37,99,235,0.12),rgba(6,10,20,0.24))] shadow-[0_12px_36px_rgba(0,0,0,0.16)] backdrop-blur-xl supports-[backdrop-filter]:bg-[linear-gradient(90deg,rgba(6,10,20,0.22),rgba(37,99,235,0.1),rgba(6,10,20,0.18))]">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-white md:px-8">
        <a
          href="#home"
          className="text-3xl font-semibold tracking-tight text-white transition  hover:text-white"
        >
          Niilo
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center text-white md:hidden"
          onClick={() => setValikkoAuki(!valikkoAuki)}
          aria-expanded={valikkoAuki}
          aria-label="Avaa navigaatio"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 rounded-full bg-current" />
            <span className="block h-0.5 w-6 rounded-full bg-current" />
            <span className="block h-0.5 w-6 rounded-full bg-current" />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-base font-medium uppercase tracking-[0.24em] text-white transition hover:text-white"
          >
            Etusivu
          </a>
          <a
            href="#projects"
            className="text-base font-medium uppercase tracking-[0.24em] text-white transition hover:text-white"
          >
            Projektit
          </a>
          <a
            href="#about"
            className="text-base font-medium uppercase tracking-[0.24em] text-white transition hover:text-white"
          >
            Kokemus
          </a>
          <a
            href="#contact"
            className="text-base font-medium uppercase tracking-[0.24em] text-white transition hover:text-white"
          >
            Yhteystiedot
          </a>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/35 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
          valikkoAuki ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-5">
          <div className="flex flex-col gap-4">
            <a
              href="#home"
              className={`text-base font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-blue-100 ${
                valikkoAuki ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '0ms' }}
              onClick={() => setValikkoAuki(false)}
            >
              Etusivu
            </a>
            <a
              href="#projects"
              className={`text-base font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-blue-100 ${
                valikkoAuki ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '70ms' }}
              onClick={() => setValikkoAuki(false)}
            >
              Projektit
            </a>
            <a
              href="#about"
              className={`text-base font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-blue-100 ${
                valikkoAuki ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '140ms' }}
              onClick={() => setValikkoAuki(false)}
            >
              Aikajana
            </a>
            <a
              href="#contact"
              className={`text-base font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:text-blue-100 ${
                valikkoAuki ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: '210ms' }}
              onClick={() => setValikkoAuki(false)}
            >
              Yhteystiedot
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
