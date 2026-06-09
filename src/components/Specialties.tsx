const especialidades = [
  {
    icon: <><path d="M20 8c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z" /><path d="M20 22v4M16 30h8M12 34c0-4 3.5-7 8-7s8 3 8 7" /></>,
    title: 'Tireoide',
    desc: 'Diagnóstico e tratamento de hipotireoidismo, hipertireoidismo, tireoidite de Hashimoto, nódulos e câncer de tireoide.',
  },
  {
    icon: <><rect x="8" y="12" width="24" height="16" rx="3" /><path d="M14 20h12M20 14v12" /></>,
    title: 'Diabetes',
    desc: 'Manejo clínico do diabetes tipo 1, tipo 2 e gestacional, com tecnologia de monitoramento e terapias modernas.',
  },
  {
    icon: <path d="M20 6c-8 0-12 7-8 14 2 4 5 8 8 14 3-6 6-10 8-14 4-7 0-14-8-14z" />,
    title: 'Obesidade & Emagrecimento',
    desc: 'Avaliação metabólica completa, tratamento clínico da obesidade e acompanhamento pré e pós-cirurgia bariátrica.',
  },
  {
    icon: <><circle cx="20" cy="20" r="10" /><path d="M20 10v10l6 4" /></>,
    title: 'Menopausa & Andropausa',
    desc: 'Reposição hormonal individualizada, alívio dos sintomas climatéricos e saúde óssea e cardiovascular na meia-idade.',
  },
  {
    icon: <><ellipse cx="20" cy="20" rx="10" ry="6" /><path d="M10 20c0 6 4 10 10 10s10-4 10-10" /><circle cx="20" cy="14" r="2" /></>,
    title: 'SOP & Saúde Hormonal Feminina',
    desc: 'Síndrome dos ovários policísticos, irregularidade menstrual, alterações de androgênios e saúde reprodutiva.',
  },
  {
    icon: <><path d="M12 28c2-4 6-8 8-8s6 4 8 8" /><path d="M16 16c0-2 2-4 4-4s4 2 4 4" /><path d="M10 20h4M26 20h4" /></>,
    title: 'Osteoporose & Metabolismo Ósseo',
    desc: 'Avaliação da densidade óssea, prevenção de fraturas e tratamento da osteoporose em todas as idades.',
  },
]

function Especialidades() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 bg-warm-white" id="especialidades">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <div>
          <p className="before:content-[''] before:block before:w-6 before:h-px before:bg-accent flex items-center text-[.75rem] tracking-[.2em] uppercase text-accent mb-4 gap-3">Áreas de atuação</p>
          <h2 className="font-serif text-[clamp(2rem,3vw,2.8rem)] font-light leading-[1.2] text-charcoal">O que eu trato</h2>
        </div>
        <p className="text-muted text-[.97rem] font-light self-end">
          A endocrinologia cuida dos hormônios que regulam praticamente todas as funções do seu organismo — do metabolismo ao humor, do peso à fertilidade.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {especialidades.map((item) => (
          <div key={item.title} className="bg-warm-white p-6 sm:p-8 lg:p-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200 hover:bg-sage-pale">
            <svg className="w-10 h-10 mb-5 text-accent" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
              {item.icon}
            </svg>
            <h3 className="font-serif text-[1.3rem] font-medium mb-3 text-charcoal">{item.title}</h3>
            <p className="text-[.88rem] text-muted font-light leading-[1.7]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Especialidades