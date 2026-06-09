import { useState } from "react"

function Consulta() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [especialidade, setEspecialidade] = useState("")
  const [mensagem, setMensagem] = useState("")

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const texto = `Olá, Dra. Thaina!

Gostaria de solicitar um agendamento:

*Nome:* ${nome}
*Telefone:* ${telefone}
*Especialidade desejada:* ${especialidade}${mensagem ? `\n*Mensagem:* ${mensagem}` : ""}

Aguardo retorno. Obrigado!`

    window.open(`https://wa.me/5511917983917?text=${encodeURIComponent(texto)}`, "_blank")
  }

  return (
    <section id="consulta" className="items-start gap-8 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 bg-warm-white px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-24">
      <div>
        <p className="before:block flex items-center gap-3 before:bg-accent mb-4 before:w-6 before:h-px text-[.75rem] text-accent uppercase before:content-[''] tracking-[.2em]">Agendamento</p>
        <h2 className="mb-5 font-serif font-light text-[clamp(2rem,3vw,2.8rem)] text-charcoal leading-[1.2]">Agende sua consulta</h2>
        <p className="mb-8 font-light text-[.97rem] text-muted">Entre em contato e dê o primeiro passo para cuidar da sua saúde hormonal com quem entende do assunto.</p>

        <ul className="flex flex-col gap-4 list-none">
          <li className="flex items-start gap-4 text-[.9rem] text-muted">
            <span className="flex justify-center items-center border border-border rounded-full w-9 h-9 text-accent shrink-0">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
              </svg>
            </span>
            <div><strong className="block mb-0.5 text-[.82rem] text-charcoal uppercase tracking-[.08em]">WhatsApp</strong>Envie uma mensagem para agendar</div>
          </li>
          <li className="flex items-start gap-4 text-[.9rem] text-muted">
            <span className="flex justify-center items-center border border-border rounded-full w-9 h-9 text-accent shrink-0">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M8 2v3M16 2v3M2 9h20" />
              </svg>
            </span>
            <div><strong className="block mb-0.5 text-[.82rem] text-charcoal uppercase tracking-[.08em]">Consultas presenciais e online</strong>Disponível para teleconsulta</div>
          </li>
          <li className="flex items-start gap-4 text-[.9rem] text-muted">
            <span className="flex justify-center items-center border border-border rounded-full w-9 h-9 text-accent shrink-0">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </span>
            <div><strong className="block mb-0.5 text-[.82rem] text-charcoal uppercase tracking-[.08em]">Atendimento particular</strong>Verifique possibilidade de reembolso</div>
          </li>
        </ul>

        <div className="mt-8">
          <a href="https://wa.me/5511917983917" target="_blank" rel="noopener noreferrer" className="inline-block bg-charcoal px-8 py-[.9rem] rounded-xs text-[.82rem] text-warm-white no-underline uppercase tracking-widest transition-colors duration-200 hover:bg-accent-dark">Falar pelo WhatsApp</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-cream p-6 lg:p-10 border border-border rounded-xs">
        <h3 className="mb-6 font-serif font-normal text-[1.5rem] text-charcoal">Solicitar agendamento</h3>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-muted uppercase tracking-widest">Nome completo</label>
          <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required className="bg-warm-white px-4 py-3 border border-border focus:border-accent rounded-xs outline-none w-full font-sans text-[.92rem] text-charcoal transition-colors duration-200" />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-muted uppercase tracking-widest">Telefone / WhatsApp</label>
          <input type="tel" placeholder="(00) 00000-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} required className="bg-warm-white px-4 py-3 border border-border focus:border-accent rounded-xs outline-none w-full font-sans text-[.92rem] text-charcoal transition-colors duration-200" />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-muted uppercase tracking-widest">Especialidade desejada</label>
          <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required className="bg-warm-white px-4 py-3 border border-border focus:border-accent rounded-xs outline-none w-full font-sans text-[.92rem] text-charcoal transition-colors duration-200">
            <option value="">Selecione...</option>
            <option value="Tireoide">Tireoide</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Obesidade / Emagrecimento">Obesidade / Emagrecimento</option>
            <option value="Menopausa / Reposição Hormonal">Menopausa / Reposição Hormonal</option>
            <option value="SOP / Saúde Feminina">SOP / Saúde Feminina</option>
            <option value="Osteoporose">Osteoporose</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-muted uppercase tracking-widest">Mensagem (opcional)</label>
          <textarea placeholder="Descreva brevemente sua queixa principal..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="bg-warm-white px-4 py-3 border border-border focus:border-accent rounded-xs outline-none w-full min-h-22.5 font-sans text-[.92rem] text-charcoal transition-colors duration-200 resize-y"></textarea>
        </div>
        <button type="submit" className="bg-charcoal py-[.9rem] rounded-xs w-full font-sans text-[.82rem] text-warm-white uppercase tracking-[.12em] transition-[background] duration-200 hover:bg-accent-dark cursor-pointer">
          Solicitar Agendamento
        </button>
      </form>
    </section>
  )
}

export default Consulta