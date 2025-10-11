import type { ReactNode } from "react"

export interface Mockup {
  type: "website" | "app"
  url: string
  title: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  navigateTo?: string
  showPhoneMockup?: boolean
  showPhoneMockups?: boolean
  mockups?: Mockup[]
}

export interface SectionProps extends Section {
  isActive: boolean
  onNavigate?: (sectionId: string) => void
}
