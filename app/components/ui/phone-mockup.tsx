"use client"

import { motion } from "framer-motion"

interface PhoneMockupProps {
  websiteUrl?: string
}

export default function PhoneMockup({ websiteUrl = "https://kamocodes.xyz" }: PhoneMockupProps) {
  return (
    <motion.div
      className="relative mx-auto w-[280px] h-[570px] md:w-[320px] md:h-[650px]"
      initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-[3rem] shadow-2xl border-[8px] border-neutral-700">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
          {/* Website Preview */}
          <iframe
            src={websiteUrl}
            className="w-full h-full border-0"
            title="Portfolio Preview"
            sandbox="allow-scripts allow-same-origin"
          />

          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Side Buttons */}
        <div className="absolute -right-[2px] top-24 w-1 h-12 bg-neutral-700 rounded-l" />
        <div className="absolute -right-[2px] top-40 w-1 h-16 bg-neutral-700 rounded-l" />
        <div className="absolute -left-[2px] top-32 w-1 h-8 bg-neutral-700 rounded-r" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#FF4D00]/20 blur-3xl -z-10 rounded-full scale-75" />
    </motion.div>
  )
}
