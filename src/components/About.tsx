import { LazyImage } from "./ui/LazyImage"

function Sobre() {
  return (
    <section id="sobre" className="grid grid-cols-2 bg-cream">
      <LazyImage src="/clinovi.jpg" alt="Foto consultório Clinovi" className="min-h-[32.5rem]"/>
      <div className="flex flex-col justify-center px-16 py-20">
        <p className="before:content-[''] before:block before:w-6 before:h-px before:bg-accent flex items-center text-[.75rem] tracking-[.2em] uppercase text-accent mb-4 gap-3">Sobre mim</p>
        <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-light leading-[1.2] mb-6 text-charcoal">
          Medicina com propósito e precisão
        </h2>
        <p className="text-muted font-light mb-4 text-[.97rem]">
          Sou médica especialista em Endocrinologia, apaixonada por compreender como os hormônios influenciam cada aspecto da saúde e do bem-estar. Minha trajetória é guiada pela convicção de que um bom tratamento começa por uma escuta verdadeira.
        </p>
        <p className="text-muted font-light mb-4 text-[.97rem]">
          Atendo pacientes com queixas hormonais e metabólicas, oferecendo avaliação completa, diagnóstico fundamentado e plano terapêutico personalizado — sempre com embasamento científico atualizado e olhar humano.
        </p>
        <p className="text-muted font-light mb-4 text-[.97rem]">
          Acredito que cada corpo tem sua própria história. Meu papel é decifrá-la junto com você.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-border">
          <div className="font-serif">
            <p className="text-[2.2rem] text-accent leading-none mb-1">@drathainapereira</p>
            <p className="text-[.8rem] text-muted uppercase tracking-[.08em]">No Instagram</p>
          </div>
          <div className="font-serif">
            <p className="text-[2.2rem] text-accent leading-none mb-1">100%</p>
            <p className="text-[.8rem] text-muted uppercase tracking-[.08em]">Foco no paciente</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre