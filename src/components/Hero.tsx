import { LazyImage } from "./ui/LazyImage"

function Hero() {
  return (
    <section id="inicio" className="min-h-[calc(100dvh-5rem)] grid grid-cols-2 pt-20">
      <div className="bg-warm-white flex flex-col justify-center px-16 py-20">
        <p className="before:content-[''] before:block before:w-8 before:h-px before:bg-accent text-[.75rem] tracking-[.2em] uppercase text-accent mb-6 flex items-center gap-3">Médica Endocrinologista</p>
        <h1 className="font-serif text-charcoal text-[clamp(3rem,5vw,4.5rem)] font-light leading-[1.1] tracking-[-0.01em] mb-6">
          Cuidado<br /><em className="italic text-accent">hormonal</em><br />que transforma
        </h1>
        <p className="text-[1.05rem] text-muted font-light max-w-110 mb-10 leading-[1.8]">
          Atendimento especializado em endocrinologia com escuta ativa, diagnóstico preciso e tratamento individualizado para cada fase da sua vida.
        </p>
        <div className="flex gap-4 items-center flex-wrap">
          <a href="#consulta" className="inline-block bg-charcoal text-warm-white text-[.82rem] tracking-widest uppercase rounded-xs px-8 py-[.9rem] transition-[background] duration-200 hover:bg-accent-dark">Agendar Consulta</a>
          <a href="#sobre" className="inline-flex items-center gap-2 text-[.85rem] text-muted no-underline transition-colors duration-200 hover:text-charcoal [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-1">
            Conheça meu trabalho
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative overflow-hidden flex items-end justify-center">
        <LazyImage />
        <div className="absolute bottom-10 left-8 bg-warm-white border border-[rgba(44,44,42,0.1)] px-5 py-4 rounded-xs">
          <p className="text-[.7rem] tracking-[.12em] uppercase text-muted mb-1">Especialidade</p>
          <p className="font-serif text-[1.1rem] font-medium">Endocrinologia & Metabolismo</p>
        </div>
      </div>
    </section>
  )
}

export default Hero