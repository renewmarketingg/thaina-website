function Footer() {
  return (
    <>
      <footer className="items-start gap-8 grid grid-cols-3 bg-charcoal p-12 px-16 text-[rgba(250,249,246,0.5)]">
        <div>
          <p className="mb-2 font-serif font-normal text-[1.2rem] text-warm-white">Dra. Thaina Pereira</p>
          <p className="text-[.82rem] leading-[1.6]">Médica Endocrinologista<br />@drathainapereira</p>
        </div>
        <div className="text-[.85rem] text-[rgba(250,249,246,0.55)]">
          <h4 className="mb-4 text-[.72rem] text-[rgba(250,249,246,0.35)] uppercase tracking-[.15em]">Navegação</h4>
          <a href="#sobre" className="block mb-2 hover:text-warm-white no-underline transition-colors duration-200">Sobre</a>
          <a href="#especialidades" className="block mb-2 hover:text-warm-white no-underline transition-colors duration-200">Especialidades</a>
          <a href="#abordagem" className="block mb-2 hover:text-warm-white no-underline transition-colors duration-200">Abordagem</a>
          <a href="#consulta" className="block mb-2 hover:text-warm-white no-underline transition-colors duration-200">Agendar Consulta</a>
        </div>
        <div className="footer-col">
          <h4 className="mb-4 text-[.72rem] text-[rgba(250,249,246,0.35)] uppercase tracking-[.15em]">Contato</h4>
          <a href="https://wa.me/5511917983917" target="_blank" rel="noopener noreferrer" className="block mb-2 text-[.85rem] text-[rgba(250,249,246,0.55)] hover:text-warm-white no-underline transition-colors duration-200">WhatsApp</a>
          <a href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="block mb-2 text-[.85rem] text-[rgba(250,249,246,0.55)] hover:text-warm-white no-underline transition-colors duration-200">@drathainapereira</a>
        </div>
      </footer>
      <div className="flex justify-between items-center bg-[rgba(0,0,0,0.8)] px-16 py-4 text-[.75rem] text-[rgba(250,249,246,0.3)]">
        <span>© {new Date().getFullYear()} Dra. Thaina Pereira. Todos os direitos reservados.</span>
        <span>CRM SP 216373</span>
      </div>
    </>
  )
}

export default Footer 