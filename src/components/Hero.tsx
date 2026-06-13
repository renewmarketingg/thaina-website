import ArrowRight from "../icons/arrow-right.svg?react"
import { LazyImage } from "./ui/LazyImage"

function Hero() {
  return (
    <section id="inicio" className="grid grid-cols-1 lg:grid-cols-2 pt-20 min-h-[calc(100dvh-5rem)]">
      <div className="flex flex-col justify-center bg-warm-white px-6 sm:px-10 lg:px-16 py-10 sm:py-16 lg:py-20">
        <p className="before:block flex items-center gap-3 before:bg-teal mb-6 before:w-8 before:h-px text-[.75rem] text-teal uppercase before:content-[''] tracking-[.2em]">Médica Endocrinologista</p>
        <h1 className="mb-6 font-serif font-light text-[clamp(3rem,5vw,4.5rem)] text-navy leading-[1.1] tracking-[-0.01em]">
          Cuidado<br /><em className="text-teal italic">hormonal</em><br />que transforma
        </h1>
        <p className="mb-10 max-w-110 font-light text-[1.05rem] text-slate leading-[1.8]">
          Atendimento especializado em endocrinologia com escuta ativa, diagnóstico preciso e tratamento individualizado para cada fase da sua vida.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#consulta" className="inline-block bg-navy hover:bg-slate px-8 py-[.9rem] rounded-xs text-[.82rem] text-warm-white uppercase tracking-widest transition-[background] duration-200">Agendar Consulta</a>
          <a href="#sobre" className="inline-flex items-center gap-2 text-[.85rem] text-slate hover:text-navy no-underline transition-colors [&_svg]:transition-transform hover:[&_svg]:translate-x-1 duration-200 [&_svg]:duration-200">
            Conheça meu trabalho
            <ArrowRight />
          </a>
        </div>
      </div>
      <div className="relative flex justify-center items-end overflow-hidden">
        <LazyImage fetchPriority="high" loading="eager"/>
        <div className="bottom-10 left-8 absolute bg-warm-white px-5 py-4 border border-border rounded-xs">
          <p className="mb-1 text-[.7rem] text-slate uppercase tracking-[.12em]">Especialidade</p>
          <p className="font-serif font-medium text-[1.1rem]">Endocrinologia & Metabolismo</p>
        </div>
      </div>
    </section>
  )
}

export default Hero