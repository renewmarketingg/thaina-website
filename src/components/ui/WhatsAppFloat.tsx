import WhatsApp from "../../icons/whatsapp.svg?react";
import { WHATSAPP_NUMBER } from "../../main";

function WhatsAppFloat() {
  const waClass = `right-4 sm:right-8 bottom-4 sm:bottom-8 z-200 fixed flex justify-center items-center bg-teal 
    shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.22)] fill-warm-white rounded-full 
      w-14 h-14 text-white hover:scale-[1.08] transition-[scale_shadow] duration-200`;
  return (
    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className={waClass} aria-label="Falar pelo WhatsApp">
      <WhatsApp />
    </a>
  )
}

export default WhatsAppFloat