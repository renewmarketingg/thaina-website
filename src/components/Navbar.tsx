import { useState } from "react"
import MenuClose from "../icons/menu-close.svg?react"
import MenuHamburger from "../icons/menu-hamburger.svg?react"

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#consulta", label: "Contato" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navClass = `top-0 right-0 left-0 z-100 fixed flex justify-between items-center bg-warm-white-alpha 
    backdrop-blur-md px-4 sm:px-8 lg:px-16 py-5 border-border border-b`
  const navLinkClass = "text-[.82rem] tracking-widest hover:text-navy/50 transition-colors duration-200"
  const ctaAnchorClass = `text-[.82rem] tracking-[.08em] text-warm-white bg-teal uppercase py-[.65rem] px-6 hover:bg-navy 
    transition-[background]`
  const menuClassName = `fixed top-full h-fit left-0 right-0 bg-navy z-50 flex flex-col items-center gap-6 p-4 md:hidden 
    transition-all duration-300 ${menuOpen ? "text-teal opacity-100 translate-y-0" : `opacity-0 text-slate -translate-y-2 
      pointer-events-none`}`
  return (
    <nav className={navClass}>
      <a href="#" className="font-serif font-medium text-[1.1rem] text-navy no-underline tracking-[.04em]">
        Dra. <span className="text-teal">Thaina Pereira</span>
      </a>
      <button
        id="mobile-menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        className="md:hidden flex justify-center items-center w-10 h-10 text-navy cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        <div className={`transition-transform duration-300 ${menuOpen ? "rotate-90" : "rotate-0"}`}>
          {menuOpen ? (
            <MenuClose />
          ) : (
            <MenuHamburger />
          )}
        </div>
      </button>
      <ul className="hidden md:flex gap-6 lg:gap-10 uppercase transition-[background] duration-200">
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} className={navLinkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#consulta" className={`${ctaAnchorClass} hidden md:inline-block`}>Agendar Consulta</a>
      <div className={menuClassName}>
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={link.href === "#consulta" ? ctaAnchorClass : navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            {link.href === "#consulta" ? "Agendar Consulta" : link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
