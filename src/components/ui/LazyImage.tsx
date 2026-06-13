import { type ImgHTMLAttributes, useState } from 'react'
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
        <div className={`absolute inset-0 ${isProfilePic ? 'bg-teal-light' : 'bg-teal-light'} flex flex-col items-center justify-center gap-4 text-slate font-cormorant text-[1rem] italic`}>
          <Loading />
        </div>
      )}
      {error && (
        <div className={`absolute inset-0 ${isProfilePic ? 'bg-teal-light' : 'bg-teal-light'} flex flex-col items-center justify-center gap-4 text-slate font-cormorant text-[1rem] italic`}>
          {isProfilePic && (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30">
              <circle cx="32" cy="20" r="10"/>
              <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24"/>
            </svg>
          )}
          {isClinicPic && (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" className="opacity-30">
              <rect x="14" y="6" width="36" height="52" rx="2"/>
              <path d="M32 12v14m-7-7h14M22 32h5m10 0h5m-20 7h5m10 0h5M29 58V47h6v11"/>
            </svg>
          )}
          {!isProfilePic && !isClinicPic && (
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" className='opacity-30'>
              <path d="M0 0h24v24H0z" fill="none" />
              <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z" />
            </svg>
          )}
          <span className='inline-flex gap-2 font-serif text-[1rem] text-slate italic'>{alt}</span>
        </div>
      )}
      {!error && 
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${isProfilePic ? 'max-h-[calc(100dvh-80px)]' : 'max-h-full'} ${cn(imgClassNameBase, imgClassName)} ${loaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      }
    </div>
  )
}