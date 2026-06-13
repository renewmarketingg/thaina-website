import { LazyImage } from "./ui/LazyImage"

function Sobre() {
  return (
    <section id="sobre" className="grid grid-cols-1 lg:grid-cols-2 bg-teal-light">
      <LazyImage src="/clinovi.webp" alt="Foto consultório Clinovi" className="order-2 lg:order-1 min-h-[50vh] lg:min-h-[32.5rem]"/>
      <div className="flex flex-col justify-center order-1 lg:order-2 px-6 lg:px-16 py-10 lg:py-20">
        <p className="before:block flex items-center gap-3 before:bg-teal mb-4 before:w-6 before:h-px text-[.75rem] text-teal uppercase before:content-[''] tracking-[.2em]">Sobre mim</p>
        <h2 className="mb-6 font-serif font-light text-[clamp(2rem,3vw,2.8rem)] text-navy leading-[1.2]">
          Medicina com propósito e precisão
        </h2>
        <p className="mb-4 font-light text-[.97rem] text-slate">
          Sou médica especialista em Endocrinologia, apaixonada por compreender como os hormônios influenciam cada aspecto da saúde e do bem-estar. Minha trajetória é guiada pela convicção de que um bom tratamento começa por uma escuta verdadeira.
        </p>
        <p className="mb-4 font-light text-[.97rem] text-slate">
          Atendo pacientes com queixas hormonais e metabólicas, oferecendo avaliação completa, diagnóstico fundamentado e plano terapêutico personalizado — sempre com embasamento científico atualizado e olhar humano.
        </p>
        <p className="mb-4 font-light text-[.97rem] text-slate">
          Acredito que cada corpo tem sua própria história. Meu papel é decifrá-la junto com você.
        </p>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mt-8 pt-8 border-border border-t">
          <div className="font-serif">
            <p className="mb-1 text-[2.2rem] text-teal leading-none">@drathainapereira</p>
            <p className="text-[.8rem] text-slate uppercase tracking-[.08em]">No Instagram</p>
          </div>
          <div className="font-serif">
            <p className="mb-1 text-[2.2rem] text-teal leading-none">100%</p>
            <p className="text-[.8rem] text-slate uppercase tracking-[.08em]">Foco no paciente</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre