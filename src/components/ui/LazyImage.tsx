import { type ImgHTMLAttributes, useState } from 'react'
import { Loading } from './Loading'

export const LazyImage = ({ src = '/thaina.jpg', alt = "Foto Dra. Thaina Pereira", className, ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const isProfilePic = src === "/thaina.jpg"

  return (
    <div className={`w-full ${isProfilePic ? 'h-[calc(100dvh-80px)]' : 'h-full'} relative overflow-hidden ${className ?? ''}`}>
      {!loaded && !error && (
        <div className={`absolute inset-0 ${isProfilePic ? 'bg-cream' : 'bg-sage-pale'} flex flex-col items-center justify-center gap-4 text-sage font-cormorant text-[1rem] italic`}>
          <Loading />
        </div>
      )}
      {error && (
        <div className={`absolute inset-0 ${isProfilePic ? 'bg-cream' : 'bg-sage-pale'} flex flex-col items-center justify-center gap-4 text-sage font-cormorant text-[1rem] italic`}>
          {src === "/thaina.jpg" ? 
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30">
              <circle cx="32" cy="20" r="10"/>
              <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24"/>
            </svg>
            :
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" className="opacity-30">
              <rect x="14" y="6" width="36" height="52" rx="2"/>
              <path d="M32 12v14m-7-7h14M22 32h5m10 0h5m-20 7h5m10 0h5M29 58V47h6v11"/>
            </svg>
          }
          <span className='inline-flex font-serif italic text-[1rem] text-sage gap-2'>{alt}</span>
        </div>
      )}
      {!error && 
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full ${isProfilePic ? 'max-h-[calc(100dvh-80px)]' : 'max-h-full'} object-cover object-top transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      }
    </div>
  )
}