"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing full-stack development skills",
    url: "https://kamocodes.xyz",
    type: "website",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "DrSalumu Medical Website",
    description: "Professional medical website with online scheduling features",
    url: "https://drsalumu.co.za",
    type: "website",
    tech: ["WordPress", "PHP", "JavaScript"],
  },
  {
    id: 3,
    title: "Math Mentor",
    description: "Educational web application for mathematics learning",
    url: "https://kamocodes.xyz",
    type: "app",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Todo Application",
    description: "Task management application with modern UI",
    url: "https://kamocodes.xyz",
    type: "app",
    tech: ["React", "JavaScript", "CSS"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-xl font-semibold">My Projects</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Explore my portfolio of web applications and websites, each demonstrating end-to-end development from
              concept to deployment.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 overflow-hidden hover:border-[#FF4D00]/50 transition-all duration-300">
                  {/* Device Mockup */}
                  <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 flex items-center justify-center min-h-[500px]">
                    {/* Phone/Desktop Mockup */}
                    <div className="relative w-full max-w-[320px] h-[600px]">
                      {/* Phone Frame */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-[3rem] shadow-2xl border-[8px] border-neutral-700">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-3xl z-10" />

                        {/* Screen with iframe */}
                        <div className="absolute inset-[8px] bg-white rounded-[2.5rem] overflow-hidden">
                          <iframe
                            src={project.url}
                            className="w-full h-full border-0 scale-100"
                            title={project.title}
                            sandbox="allow-scripts allow-same-origin allow-popups"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
                        </div>

                        {/* Side Buttons */}
                        <div className="absolute -right-[2px] top-24 w-1 h-12 bg-neutral-700 rounded-l" />
                        <div className="absolute -right-[2px] top-40 w-1 h-16 bg-neutral-700 rounded-l" />
                        <div className="absolute -left-[2px] top-32 w-1 h-8 bg-neutral-700 rounded-r" />
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-[#FF4D00]/20 blur-3xl -z-10 rounded-full scale-75 group-hover:scale-90 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-neutral-400">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Visit Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4D00] hover:bg-[#FF6A00] text-white font-medium rounded-lg transition-colors"
                    >
                      Visit Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-neutral-400 mb-4">Want to see more?</p>
            <a
              href="https://github.com/KamoLovesCode"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
