"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "../types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const handleButtonClick = () => {
    if (id === "hero" || id === "projects") {
      window.open("https://kamocodes.xyz", "_blank")
    } else if (id === "contact") {
      window.location.href = "mailto:kamogelomosiah@gmail.com"
    }
  }

  return (
    <motion.section
      id={id}
      className="relative h-screen w-full flex flex-col justify-center p-8 md:p-16 lg:p-24"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {subtitle && (
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            onClick={handleButtonClick}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
      {id === "contact" && (
        <motion.div
          className="mt-8 flex flex-col gap-2 text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg">Email: kamogelomosiah@gmail.com</p>
          <p className="text-lg">Phone: 069 843 9670</p>
          <p className="text-lg">GitHub: KamoLovesCode</p>
        </motion.div>
      )}
    </motion.section>
  )
}
