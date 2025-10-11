"use client"

import { motion } from "framer-motion"

interface AppMockupProps {
  appUrl?: string
  title?: string
}

export default function AppMockup({ appUrl = "https://drsalumu.co.za", title = "App" }: AppMockupProps) {
  return (
    <motion.div
      className="relative mx-auto w-[280px] h-[570px] md:w-[320px] md:h-[650px]"
      initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Phone Frame - More modern app style */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black rounded-[3rem] shadow-2xl border-[8px] border-black">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="absolute inset-[8px] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[2.5rem] overflow-hidden">
          {/* App Preview */}
          <iframe
            src={appUrl}
            className="w-full h-full border-0"
            title={`${title} Preview`}
            sandbox="allow-scripts allow-same-origin"
          />

          {/* Overlay gradient for mobile app feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* Side Buttons */}
        <div className="absolute -right-[2px] top-24 w-1 h-12 bg-black rounded-l" />
        <div className="absolute -right-[2px] top-40 w-1 h-16 bg-black rounded-l" />
        <div className="absolute -left-[2px] top-32 w-1 h-8 bg-black rounded-r" />
      </div>

      {/* Glow Effect - Purple/blue for app */}
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full scale-75" />
    </motion.div>
  )
}
