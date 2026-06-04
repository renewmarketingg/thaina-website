function Instagram() {
  return (
    <section id="instagram" className="px-16 py-24 bg-cream">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="before:content-[''] before:block before:w-6 before:h-px before:bg-accent flex items-center text-[.75rem] tracking-[.2em] uppercase text-accent mb-4 gap-3">Redes sociais</p>
          <h2 className="font-serif text-[2.2rem] font-light text-charcoal">No Instagram</h2>
        </div>
        <a href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="text-[.82rem] tracking-[.1em] uppercase text-accent no-underline flex items-center gap-2">
          @drathainapereira
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {['Tireoide', 'Hormônios', 'Diabetes', 'Saúde feminina'].map((card) => (
          <a key={card} href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="aspect-square bg-sage-pale rounded-xs overflow-hidden flex items-center justify-center text-sage text-[.8rem] italic font-serif transition-transform duration-200 hover:scale-[0.98] no-underline">
            {card}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Instagram