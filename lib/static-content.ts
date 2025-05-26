export interface HeroData {
  headline: string
  subline: string
  ctaText: string
  ctaLink: string
}

export interface ApproachItem {
  title: string
  description: string
}

export interface ValueItem {
  icon: string
  title: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface WhyBrillyItem {
  title: string
  description: string
}

export interface ContactData {
  headline: string
  ctaText: string
  email: string
}

export interface StaticContent {
  hero: HeroData
  approach: { items: ApproachItem[] }
  values: { grid: ValueItem[] }
  services: ServiceItem[]
  industries: string[]
  whyBrilly: WhyBrillyItem[]
  contact: ContactData
}

const staticContent: StaticContent = {
  hero: {
    headline: "Understand Needs. Drive Change. Deliver Growth.",
    subline:
      "At Brilly Group Limited, we partner with you to tackle your toughest business challenges through honest, transparent and outcome-driven solutions.",
    ctaText: "Let's Talk",
    ctaLink: "#contact",
  },
  approach: {
    items: [
      {
        title: "We don't guess. We listen.",
        description: "Every engagement starts with your story—your goals, your obstacles, your people.",
      },
      {
        title: "We believe in radical transparency.",
        description: "You'll always know what we're doing, why we're doing it, and how it's moving you forward.",
      },
      {
        title: "We cut to the chase.",
        description: "No jargon. No fluff. We focus on the pain points that matter and deliver measurable impact.",
      },
    ],
  },
  values: {
    grid: [
      { icon: "🤝", title: "Active Listening" },
      { icon: "🔍", title: "Transparent Communication" },
      { icon: "🤲", title: "Honesty & Integrity" },
      { icon: "🎯", title: "Results-Oriented" },
      { icon: "💡", title: "Pain-Point Focused" },
    ],
  },
  services: [
    {
      title: "Business Automation",
      description:
        "Streamline repetitive processes, eliminate manual bottlenecks and free up your team for value-add work. From RPA pilots to end-to-end workflow design, we make your operations faster, more reliable and fully auditable.",
    },
    {
      title: "AI Implementation",
      description:
        "Turn data into decisions with scalable, production-ready AI solutions. We handle everything from model selection and data engineering to API integration and change management—so you get measurable business impact, not just prototypes.",
    },
    {
      title: "Employee Enablement",
      description:
        "Empower your people with the tools, insights and practices that drive growth. Our blended programs combine hands-on training (AI upskilling, digital tool mastery) with wellbeing workshops and ongoing coaching—boosting adoption, engagement and ROI.",
    },
  ],
  industries: [
    "Engineering",
    "Manufacturing",
    "Healthcare",
    "Recruitment",
    "Retail & e-Commerce",
    "Professional Services",
    "Education & Training",
    "Logistics & Supply Chain",
  ],
  whyBrilly: [
    {
      title: "Single Point of Contact",
      description:
        "One dedicated partner for Tech, HR, Admin, Operations, Sales & Marketing—so you never have to juggle multiple vendors.",
    },
    {
      title: "Flexible Engagements",
      description: "From quick-win workshops to end-to-end transformation programs—pick what works for you.",
    },
    {
      title: "Accountability Built-In",
      description: "Regular check-ins, clear milestones and transparent reporting keep you in the driver's seat.",
    },
  ],
  contact: {
    headline: "Ready to solve your next business challenge?",
    ctaText: "Book a Free Discovery Call",
    email: "hello@brillygroup.com",
  },
}

export default staticContent
