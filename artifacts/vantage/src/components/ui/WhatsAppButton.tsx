import { motion } from "framer-motion";
import { getWhatsAppUrl, WHATSAPP_ENABLED } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  if (!WHATSAPP_ENABLED) return null;

  const url = getWhatsAppUrl();
  if (!url) return null;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent("whatsapp_cta_clicked", { source: "floating_button" })}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50"
      style={{ display: "block", width: 56, height: 64, filter: "drop-shadow(0 4px 12px rgba(123,47,232,0.45))" }}
    >
      <svg
        viewBox="0 0 56 64"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="64"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="videro-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B2FE8" />
            <stop offset="100%" stopColor="#3F60F0" />
          </linearGradient>
        </defs>
        {/* Speech bubble body with tail at bottom-left */}
        <path
          d="M10 0 h36 a10 10 0 0 1 10 10 v34 a10 10 0 0 1 -10 10 h-18 l-14 10 v-10 h-4 a10 10 0 0 1 -10 -10 v-34 a10 10 0 0 1 10 -10 z"
          fill="url(#videro-grad)"
        />
        {/* WhatsApp-style phone handset icon, centered in bubble body */}
        <path
          d="M35.5 30.9c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.8-.7-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.1 1 .4 1.7.7 2.3.9 1 .3 1.9.3 2.6.2.8-.1 2.4-1 2.7-1.9.3-.9.3-1.8.2-1.9-.1-.2-.4-.3-.8-.5z"
          fill="white"
        />
        <path
          d="M28 12.5c-7.5 0-13.5 6-13.5 13.5 0 2.4.6 4.6 1.7 6.6l-1.6 5.9 6-1.6c1.9 1 4 1.6 6.3 1.6 7.5 0 13.5-6 13.5-13.5s-6-13.5-13.4-13.5zm0 24.5c-2 0-4-.5-5.7-1.5l-.4-.2-4.2 1.1 1.1-4.1-.3-.4c-1.1-1.8-1.7-3.8-1.7-5.9 0-6.2 5-11.2 11.2-11.2s11.2 5 11.2 11.2-5 11-11.2 11z"
          fill="white"
        />
      </svg>
    </motion.a>
  );
}
