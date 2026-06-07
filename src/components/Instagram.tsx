function Instagram() {
  const cards = [
    {
      title: 'Tireoide',
      img: '/tireoide.jpg',
    },
    {
      title: 'Hormônios',
      img: '/sistema_endocrino.jpg',
    },
    {
      title: 'Diabetes',
      img: '/diabetes.jpg',
    },
    {
      title: 'Saúde feminina',
      img: '/saude_feminina.png',
    },
  ]
  return (
    <section id="instagram" className="bg-cream px-16 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="before:block flex items-center gap-3 before:bg-accent mb-4 before:w-6 before:h-px text-[.75rem] text-accent uppercase before:content-[''] tracking-[.2em]">Redes sociais</p>
          <h2 className="font-serif font-light text-[2.2rem] text-charcoal">No Instagram</h2>
        </div>
        <a href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[.82rem] text-accent no-underline uppercase tracking-[.1em]">
          @drathainapereira
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>
      <div className="gap-4 grid grid-cols-4">
        {cards.map((card) => (
            <a key={card.title} href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="bg-sage-pale rounded-xs aspect-square overflow-hidden hover:scale-[0.98] transition-transform duration-200">
              <img src={card.img} alt={`Imagem de ${card.title}`} className="size-full object-cover"/>
            </a>
        ))}
      </div>
    </section>
  )
}

export default Instagram