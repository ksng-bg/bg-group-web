"use client"

import type { HeroData } from "@/lib/static-content"
import { Button } from "@/components/ui/button"

interface HeroProps {
  data: HeroData
}

export default function Hero({ data }: HeroProps) {
  const handleCTAClick = () => {
    window.location.href = "mailto:hello@brillygroup.com"
  }

  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">{data.headline}</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">{data.subline}</p>
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={handleCTAClick}
          >
            {data.ctaText}
          </Button>
        </div>
      </div>
    </section>
  )
}
