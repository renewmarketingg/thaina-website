import { type ImgHTMLAttributes, useState } from 'react'
import BuildingPlaceholder from "../../icons/building-placeholder.svg?react"
import ImagePlaceholder from "../../icons/image-placeholder.svg?react"
import PersonPlaceholder from "../../icons/person-placeholder.svg?react"
import { cn } from '../../util'
import { Loading } from './Loading'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  imgClassName?: string
}

export const LazyImage = ({ 
  src = '/thaina_formal.webp', 
  alt = "Foto Dra. Thaina Pereira", 
  className, 
  imgClassName, 
  ...props }: LazyImageProps) => {
    
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const isProfilePic = src === "/thaina_formal.webp"
  const isClinicPic = src === "/clinovi.webp"

  const imgClassNameBase = 'w-full h-full object-cover object-top transition-opacity duration-300'

  return (
    <div
      aria-busy={!loaded}
      className={`w-full ${isProfilePic ? 'h-[calc(100dvh-80px)]' : 'h-full'} relative overflow-hidden ${className ?? ''}`}>
      {!loaded && !error && (
        <div className={`absolute inset-0 bg-teal-light flex flex-col items-center justify-center gap-4 text-slate font-cormorant text-[1rem] italic`}>
          <Loading />
        </div>
      )}
      {error && (
        <div className={`absolute inset-0 bg-teal-light flex flex-col items-center justify-center gap-4 text-slate font-cormorant text-[1rem] italic`}>
          {isProfilePic && (
            <PersonPlaceholder className="opacity-30" />
          )}
          {isClinicPic && (
            <BuildingPlaceholder className="opacity-30" />
          )}
          {!isProfilePic && !isClinicPic && (
            <ImagePlaceholder className="opacity-30" />
          )}
          <span className='inline-flex gap-2 font-serif text-[1rem] text-slate italic'>{alt}</span>
        </div>
      )}
      {!error && 
        <img
          src={src}
          alt={alt}
          loading='lazy'
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${isProfilePic ? 'max-h-[calc(100dvh-80px)]' : 'max-h-full'} ${cn(imgClassNameBase, imgClassName)} ${loaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      }
    </div>
  )
}