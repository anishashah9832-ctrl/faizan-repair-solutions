import { Phone, MessageCircle } from "lucide-react";
import { business, waGeneral } from "@/lib/business";

export function FloatingActions() {
  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={waGeneral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform hover:scale-105 md:inline-flex"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>

      {/* Mobile bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-card pb-[env(safe-area-inset-bottom)] shadow-lift md:hidden">
        <a
          href={business.phoneHref}
          className="inline-flex items-center justify-center gap-2 py-4 text-sm font-semibold text-navy"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
        </a>
        <a
          href={waGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
      </div>
      <div className="h-[60px] md:hidden" aria-hidden="true" />
    </>
  );
}
