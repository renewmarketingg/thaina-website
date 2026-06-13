import ArrowUpRight from "../icons/arrow-up-right.svg?react";
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
            <ArrowUpRight />
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