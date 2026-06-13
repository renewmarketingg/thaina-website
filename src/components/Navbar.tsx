import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navClass = `fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-4 sm:px-8 lg:px-16 py-5 bg-warm-white-alpha 
    backdrop-blur-md border-b border-border`
  const navLinkClass = "text-[.82rem] tracking-widest text-slate hover:text-navy/50 transition-colors duration-200"
  const ctaAnchorClass = "text-[.82rem] tracking-[.08em] text-warm-white bg-teal uppercase py-[.65rem] px-6 hover:bg-navy transition-[background]"
  return (
    <nav className={navClass}>
      <a href="#" className="font-serif font-medium text-[1.1rem] text-navy no-underline tracking-[.04em]">
        Dra. <span className="text-teal">Thaina Pereira</span>
      </a>
      <button
        className="md:hidden flex justify-center items-center w-10 h-10 text-navy cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <div className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}>
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </div>
      </button>
      <ul className="hidden md:flex gap-6 lg:gap-10 uppercase transition-[background] duration-200">
        <li><a href="#sobre" className={navLinkClass}>Sobre</a></li>
        <li><a href="#especialidades" className={navLinkClass}>Especialidades</a></li>
        <li><a href="#abordagem" className={navLinkClass}>Abordagem</a></li>
        <li><a href="#consulta" className={navLinkClass}>Contato</a></li>
      </ul>
      <a href="#consulta" className={`${ctaAnchorClass} hidden md:inline-block`}>Agendar Consulta</a>
      <div className={`fixed top-18.25 left-0 right-0 bottom-0 bg-warm-white/50 backdrop-blur-md z-50 flex flex-col items-center gap-6 pt-10 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
          <a href="#sobre" className={navLinkClass} onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href="#especialidades" className={navLinkClass} onClick={() => setMenuOpen(false)}>Especialidades</a>
          <a href="#abordagem" className={navLinkClass} onClick={() => setMenuOpen(false)}>Abordagem</a>
          <a href="#consulta" className={`${ctaAnchorClass} inline-block mt-4`} onClick={() => setMenuOpen(false)}>Agendar Consulta</a>
      </div>
    </nav>
  )
}

export default Navbar
