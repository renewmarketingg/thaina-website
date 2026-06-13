import { LazyImage } from "./ui/LazyImage";

function Instagram() {
  const extPhotos = 'webp'
  const images = [
  `/thaina1.${extPhotos}`,
  `/thaina2.${extPhotos}`,
  `/thaina_formal2.${extPhotos}`,
  `/thaina3.${extPhotos}`,
  ]
  return (
    <section id="instagram" className="bg-teal-light px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-24">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-end gap-4 mb-12">
        <div>
          <p className="before:block flex items-center gap-3 before:bg-teal mb-4 before:w-6 before:h-px text-[.75rem] text-teal uppercase before:content-[''] tracking-[.2em]">Redes sociais</p>
          <h2 className="font-serif font-light text-[2.2rem] text-navy">No Instagram</h2>
        </div>
        <div>
          <a href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[.82rem] text-teal no-underline uppercase tracking-widest">
            @drathainapereira
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="overflow-visible" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.66699 12.667V5.33301C1.66708 4.8911 1.84279 4.46776 2.15527 4.15527C2.46776 3.84279 2.8911 3.66708 3.33301 3.66699H7.33301V4.33301H3.33301C3.06791 4.33309 2.81344 4.43852 2.62598 4.62598C2.43852 4.81344 2.33309 5.06791 2.33301 5.33301V12.667C2.33309 12.9321 2.43852 13.1866 2.62598 13.374C2.81344 13.5615 3.06791 13.6669 3.33301 13.667H10.667C10.9321 13.6669 11.1866 13.5615 11.374 13.374C11.5615 13.1866 11.6669 12.9321 11.667 12.667V8.66699H12.333V12.667C12.3329 13.1089 12.1572 13.5322 11.8447 13.8447C11.5322 14.1572 11.1089 14.3329 10.667 14.333H3.33301C2.8911 14.3329 2.46776 14.1572 2.15527 13.8447C1.84279 13.5322 1.66708 13.1089 1.66699 12.667Z" />
              <path
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300"
                d="M13.667 6H14.333V1.66699H10V2.33301H13.1963L6.43066 9.09766L6.66699 9.33301L6.90234 9.56934L13.667 2.80371V6Z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
        {images.map((img, i) => {
          const isCustomCards = i === 1 || i === 2 || i === 3;
          return (
            <a key={i} href="https://www.instagram.com/drathainapereira" target="_blank" rel="noopener noreferrer" className="group rounded-xs aspect-square overflow-hidden">
              <LazyImage src={img} alt={`Imagem de  Thaina ${i}`} imgClassName={`transition-transform duration-300 group-hover:scale-110 ${isCustomCards ? "object-center" : ""}`}/>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Instagram