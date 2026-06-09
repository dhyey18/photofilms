'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'
  const message = encodeURIComponent(
    "Hi! I'd like to inquire about wedding photography packages from Photofilms."
  )
  const href = `https://wa.me/${number}?text=${message}`

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
          style={{ backgroundColor: '#25D366' }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: '#25D366' }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
          />
          <MessageCircle className="relative z-10 w-7 h-7 text-white fill-white" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
