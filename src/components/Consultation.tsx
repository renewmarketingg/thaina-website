import { useState } from "react"
import { validarTelefone } from "../util"

function Consulta() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [especialidade, setEspecialidade] = useState("")
  const [mensagem, setMensagem] = useState("")

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const telefoneLimpo = telefone.replace(/\D/g, "")

    if (!validarTelefone(telefoneLimpo)) {
      alert("Por favor, informe um telefone válido com DDD.")
      return
    }

    const texto = `Olá, Dra. Thaina!

Gostaria de solicitar um agendamento:

*Nome:* ${nome}
*Telefone:* ${telefone}
*Especialidade desejada:* ${especialidade}${mensagem ? `\n*Mensagem:* ${mensagem}` : ""}

Aguardo retorno. Obrigado!`

    window.open(`https://wa.me/5511917983917?text=${encodeURIComponent(texto)}`, "_blank")
  }
  
  function handleTelefoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value.replace(/\D/g, "")
    setTelefone(valor)
  }


  return (
    <section id="consulta" className="items-start gap-8 lg:gap-20 grid grid-cols-1 lg:grid-cols-2 bg-warm-white px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-24">
      <div>
        <p className="before:block flex items-center gap-3 before:bg-teal mb-4 before:w-6 before:h-px text-[.75rem] text-teal uppercase before:content-[''] tracking-[.2em]">Agendamento</p>
        <h2 className="mb-5 font-serif font-light text-[clamp(2rem,3vw,2.8rem)] text-navy leading-[1.2]">Agende sua consulta</h2>
        <p className="mb-8 font-light text-[.97rem] text-slate">Entre em contato e dê o primeiro passo para cuidar da sua saúde hormonal com quem entende do assunto.</p>

        <ul className="flex flex-col gap-4 list-none">
          <li className="flex items-start gap-4 text-[.9rem] text-slate">
            <span className="flex justify-center items-center border border-border rounded-full w-9 h-9 text-teal shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 16.1v3a2 2 0 0 1-2.2 2A19.9 19.9 0 0 1 2.9 4.2a2 2 0 0 1 2-2.2h3a2 2 0 0 1 2 1.7l.3 2a2 2 0 0 1-.6 1.9l-1.2.5a16 16 0 0 0 7.5 7.5l.5-1.2a2 2 0 0 1 1.9-.6l2 .3a2 2 0 0 1 1.7 2z"/></svg>
            </span>
            <div><strong className="block mb-0.5 text-[.82rem] text-navy uppercase tracking-[.08em]">WhatsApp</strong>Envie uma mensagem para agendar</div>
          </li>
          <li className="flex items-start gap-4 text-[.9rem] text-slate">
            <span className="flex justify-center items-center border border-border rounded-full w-9 h-9 text-teal shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4m8-4v4M3 10h18"/></svg>
            </span>
            <div><strong className="block mb-0.5 text-[.82rem] text-navy uppercase tracking-[.08em]">Consultas presenciais e online</strong>Disponível para teleconsulta</div>
          </li>
          <li className="flex items-start gap-4 text-[.9rem] text-slate">
            <span className="flex justify-center items-center border border-border rounded-full w-9 h-9 text-teal shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
            </span>
            <div><strong className="block mb-0.5 text-[.82rem] text-navy uppercase tracking-[.08em]">Atendimento particular</strong>Verifique possibilidade de reembolso</div>
          </li>
        </ul>

        <div className="mt-8">
          <a href="https://wa.me/5511917983917" target="_blank" rel="noopener noreferrer" className="inline-block bg-navy hover:bg-navy-deep px-8 py-[.9rem] rounded-xs text-[.82rem] text-warm-white no-underline uppercase tracking-widest transition-colors duration-200">Falar pelo WhatsApp</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-teal-light p-6 lg:p-10 border border-border rounded-xs">
        <h3 className="mb-6 font-serif font-normal text-[1.5rem] text-navy">Solicitar agendamento</h3>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-slate uppercase tracking-widest">Nome completo</label>
          <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required className="bg-warm-white px-4 py-3 border border-border focus:border-teal rounded-xs outline-none w-full font-sans text-[.92rem] text-navy transition-colors duration-200" />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-slate uppercase tracking-widest">Telefone / WhatsApp</label>
          <input type="tel" placeholder="(00) 00000-0000" value={telefone} onChange={handleTelefoneChange} required className="bg-warm-white px-4 py-3 border border-border focus:border-teal rounded-xs outline-none w-full font-sans text-[.92rem] text-navy transition-colors duration-200" />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[.75rem] text-slate uppercase tracking-widest">Especialidade desejada</label>
          <select value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required className="bg-warm-white px-4 py-3 border border-border focus:border-teal rounded-xs outline-none w-full font-sans text-[.92rem] text-navy transition-colors duration-200">
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
          <label className="block mb-2 text-[.75rem] text-slate uppercase tracking-widest">Mensagem (opcional)</label>
          <textarea placeholder="Descreva brevemente sua queixa principal..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} className="bg-warm-white px-4 py-3 border border-border focus:border-teal rounded-xs outline-none w-full min-h-22.5 font-sans text-[.92rem] text-navy transition-colors duration-200 resize-y"></textarea>
        </div>
        <button type="submit" className="bg-navy hover:bg-navy-deep py-[.9rem] rounded-xs w-full font-sans text-[.82rem] text-warm-white uppercase tracking-[.12em] transition-[background] duration-200 cursor-pointer">
          Solicitar Agendamento
        </button>
      </form>
    </section>
  )
}

export default Consulta