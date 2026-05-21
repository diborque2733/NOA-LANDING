export type Eyebrow = string

export interface CTAButton {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  source?: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Step {
  number: string
  eyebrow: string
  title: string
  description: string
}

export interface UseCase {
  eyebrow: string
  title: string
  description: string
}

export interface PricingModel {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  highlight?: boolean
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  highlight?: string
}

export interface FaqItem {
  question: string
  answer: string
}
