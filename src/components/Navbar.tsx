function Navbar() {
  const navClass = `fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-16 py-5 bg-warm-white-alpha 
    backdrop-blur-md border-b border-[rgba(44,44,42,0.1)]`
  const navLinkClass = "text-[.82rem] tracking-widest text-muted hover:text-charcoal transition-colors duration-200"
  const ctaAnchorClass = "text-[.82rem] tracking-[.08em] text-warm-white bg-accent uppercase py-[.65rem] px-6 hover:bg-accent-dark transition-[background]"
  return (
    <nav className={navClass}>
    <a href="#" className="font-serif text-[1.1rem] font-medium tracking-[.04em] text-charcoal no-underline">
        Dra. <span className="text-accent">Thaina Pereira</span>
      </a>
      <ul className="flex gap-10 uppercase transition-[background] duration-200">
        <li><a href="#sobre" className={navLinkClass}>Sobre</a></li>
        <li><a href="#especialidades" className={navLinkClass}>Especialidades</a></li>
        <li><a href="#abordagem" className={navLinkClass}>Abordagem</a></li>
        <li><a href="#consulta" className={navLinkClass}>Contato</a></li>
      </ul>
      <a href="#consulta" className={ctaAnchorClass}>Agendar Consulta</a>
    </nav>
  )
}

export default Navbar