import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const validarTelefone = (phone: string) => {
  const n = phone.replace(/\D/g, "")

  const regex = /^[1-9]{2}9?[0-9]{8}$/
  return regex.test(n)
}