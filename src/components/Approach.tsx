const passos = [
  { num: '01', titulo: 'Escuta ativa', desc: 'Cada consulta começa com atenção total à sua história — sintomas, estilo de vida, queixas e expectativas.' },
  { num: '02', titulo: 'Investigação precisa', desc: 'Solicito exames com critério, interpretando os resultados dentro do contexto clínico de cada paciente.' },
  { num: '03', titulo: 'Plano personalizado', desc: 'Nenhum tratamento é genérico. Construímos juntos um plano que respeita sua realidade e seus objetivos.' },
  { num: '04', titulo: 'Acompanhamento contínuo', desc: 'Estou presente em cada etapa da sua evolução, ajustando o tratamento conforme necessário.' },
]

function Abordagem() {
  return (
    <section id="abordagem" className="bg-charcoal text-warm-white py-24 px-16 grid grid-cols-[1fr_1.5fr] gap-20 items-center">
      <div>
        <p className="before:content-[''] before:block before:w-6 before:h-px before:bg-sage-light flex items-center text-[.75rem] tracking-[.2em] uppercase text-sage-light mb-4 gap-3">Minha abordagem</p>
        <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-light leading-[1.2] text-warm-white">
          Medicina que <em className="italic text-sage-light">ouve</em> antes de prescrever
        </h2>
      </div>
      <div className="flex flex-col gap-8">
        {passos.map((passo) => (
          <div key={passo.num} className="grid grid-cols-[48px_1fr] gap-5 items-start">
            <span className="font-serif text-[2rem] font-light text-sage-light leading-none pt-0.5">{passo.num}</span>
            <div>
              <h4 className="text-[1rem] font-medium mb-1 text-warm-white">{passo.titulo}</h4>
              <p className="text-[.88rem] text-[rgba(250,249,246,0.55)] font-light">{passo.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Abordagem