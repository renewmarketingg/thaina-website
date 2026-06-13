import SpecialtyDiabetes from "../icons/specialty-diabetes.svg?react"
import SpecialtyMenopause from "../icons/specialty-menopause.svg?react"
import SpecialtyObesity from "../icons/specialty-obesity.svg?react"
import SpecialtyOsteoporosis from "../icons/specialty-osteoporosis.svg?react"
import SpecialtyPcos from "../icons/specialty-pcos.svg?react"
import SpecialtyThyroid from "../icons/specialty-thyroid.svg?react"

const especialidades = [
  {
    Icon: SpecialtyThyroid,
    title: 'Tireoide',
    desc: 'Diagnóstico e tratamento de hipotireoidismo, hipertireoidismo, tireoidite de Hashimoto, nódulos e câncer de tireoide.',
  },
  {
    Icon: SpecialtyDiabetes,
    title: 'Diabetes',
    desc: 'Manejo clínico do diabetes tipo 1, tipo 2 e gestacional, com tecnologia de monitoramento e terapias modernas.',
  },
  {
    Icon: SpecialtyObesity,
    title: 'Obesidade & Emagrecimento',
    desc: 'Avaliação metabólica completa, tratamento clínico da obesidade e acompanhamento pré e pós-cirurgia bariátrica.',
  },
  {
    Icon: SpecialtyMenopause,
    title: 'Menopausa & Andropausa',
    desc: 'Reposição hormonal individualizada, alívio dos sintomas climatéricos e saúde óssea e cardiovascular na meia-idade.',
  },
  {
    Icon: SpecialtyPcos,
    title: 'SOP & Saúde Hormonal Feminina',
    desc: 'Síndrome dos ovários policísticos, irregularidade menstrual, alterações de androgênios e saúde reprodutiva.',
  },
  {
    Icon: SpecialtyOsteoporosis,
    title: 'Osteoporose & Metabolismo Ósseo',
    desc: 'Avaliação da densidade óssea, prevenção de fraturas e tratamento da osteoporose em todas as idades.',
  },
]

function Especialidades() {
  return (
    <section className="bg-warm-white px-4 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24" id="especialidades">
      <div className="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-2 mb-12 lg:mb-16">
        <div>
          <p className="before:block flex items-center gap-3 before:bg-teal mb-4 before:w-6 before:h-px text-[.75rem] text-teal uppercase before:content-[''] tracking-[.2em]">Áreas de atuação</p>
          <h2 className="font-serif font-light text-[clamp(2rem,3vw,2.8rem)] text-navy leading-[1.2]">O que eu trato</h2>
        </div>
        <p className="self-end font-light text-[.97rem] text-slate">
          A endocrinologia cuida dos hormônios que regulam praticamente todas as funções do seu organismo — do metabolismo ao humor, do peso à fertilidade.
        </p>
      </div>

      <div className="gap-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-border border border-border">
        {especialidades.map((item) => (
          <div key={item.title} className="bg-warm-white hover:bg-teal-light p-6 sm:p-8 lg:p-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
            <item.Icon className="mb-5 w-10 h-10 text-teal" />
            <h3 className="mb-3 font-serif font-medium text-[1.3rem] text-navy">{item.title}</h3>
            <p className="font-light text-[.88rem] text-slate leading-[1.7]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Especialidades