"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Section from "./Section"
import Layout from "./Layout"
import { sections } from "./constants/sections"
import { ChevronDown } from "lucide-react"

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1)
    }
  }

  const handlePrev = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
    }
  }

  const handleNavClick = (index: number) => {
    setActiveSection(index)
  }

  return (
    <Layout>
      {/* Navigation dots */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`w-3 h-3 rounded-full my-2 transition-all ${
              index === activeSection ? "bg-[#FF4D00] scale-150" : "bg-gray-600"
            }`}
            onClick={() => handleNavClick(index)}
            aria-label={`Go to ${section.id}`}
          />
        ))}
      </nav>

      {/* Next section button */}
      {activeSection < sections.length - 1 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleNext}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 bg-[#FF4D00] text-black px-6 py-3 rounded-full font-medium hover:bg-[#ff6a2e] transition-colors flex items-center gap-2"
        >
          Next <ChevronDown className="w-5 h-5" />
        </motion.button>
      )}

      {/* Previous section button */}
      {activeSection > 0 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handlePrev}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-30 bg-transparent border-2 border-[#FF4D00] text-[#FF4D00] px-6 py-3 rounded-full font-medium hover:bg-[#FF4D00] hover:text-black transition-colors flex items-center gap-2"
        >
          <ChevronDown className="w-5 h-5 rotate-180" /> Previous
        </motion.button>
      )}

      {/* Sections with AnimatePresence for smooth transitions */}
      <div className="h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <Section key={sections[activeSection].id} {...sections[activeSection]} isActive={true} />
        </AnimatePresence>
      </div>
    </Layout>
  )
}
