import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import careers, {
  APPLY_MAILTO,
  APPLY_EMAIL,
  COMPANIES_HOUSE_URL,
} from "@/lib/careers-content"
import {
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Smartphone,
  MapPin,
  Wallet,
  Eye,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Field & Market Researcher — Brilly Group (Greater Manchester)",
  description:
    "Flexible, self-employed field research work across Greater Manchester with Brilly Group Limited (company no. 14176606), a UK-registered company. Photograph local shops and restaurants, choose your own hours, get paid weekly. No fees, ever.",
}

export default function CareersPage() {
  const { hero, legitimacy, whatItIs, trust, process, requirements, apply } =
    careers

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0" aria-label="Brilly Group home">
              <Image
                src="/brilly-group-logo.png"
                alt="Brilly Group - Tech that Works"
                width={200}
                height={67}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                href="/"
                className="hidden sm:inline text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Main site
              </Link>
              <Button
                asChild
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold"
              >
                <a href={APPLY_MAILTO}>Apply now</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal-300 font-semibold tracking-wide uppercase text-sm mb-4">
              {hero.eyebrow}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
              {hero.subline}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-teal-100 font-medium mb-10">
              <Wallet className="w-4 h-4" />
              {hero.payChip}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <a href={APPLY_MAILTO}>{hero.ctaText}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <a
                  href={COMPANIES_HOUSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify us on Companies House
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legitimacy strip */}
      <section className="py-16 bg-slate-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8 text-center">
              <ShieldCheck className="w-8 h-8 text-teal-600 shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {legitimacy.heading}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {legitimacy.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg bg-white border border-gray-200 p-4 text-center"
                >
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                    {fact.label}
                  </p>
                  <p className="text-slate-900 font-semibold leading-snug">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                asChild
                variant="outline"
                className="border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold"
              >
                <a
                  href={COMPANIES_HOUSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {legitimacy.verifyText}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              {whatItIs.heading}
            </h2>
            {whatItIs.body.map((para, i) => (
              <p
                key={i}
                className="text-lg text-gray-600 leading-relaxed mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
            <div className="mt-8 flex items-center justify-center gap-2 text-teal-700 font-medium">
              <Eye className="w-5 h-5" />
              You photograph business premises — never people.
            </div>
          </div>
        </div>
      </section>

      {/* Trust / FAQ — the centrepiece */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <BadgeCheck className="w-12 h-12 text-teal-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {trust.heading}
            </h2>
            <p className="text-lg text-blue-100">{trust.subheading}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {trust.faqs.map((faq) => (
              <Card
                key={faq.question}
                className="bg-slate-800 border-slate-700"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {process.heading}
            </h2>
            <p className="text-lg text-gray-600">{process.subheading}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {process.steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border border-gray-200 p-6 hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-500 text-white font-bold shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-slate-900 text-lg font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              {requirements.heading}
            </h2>
            <ul className="space-y-4">
              {requirements.items.map((item, i) => {
                const icons = [Smartphone, Wallet, MapPin, ShieldCheck, Eye, ArrowRight]
                const Icon = icons[i] ?? CheckCircle2
                return (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-lg border border-gray-200 p-4"
                  >
                    <Icon className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {apply.heading}
            </h2>
            <p className="text-lg text-blue-100 mb-8">{apply.body}</p>
            <div className="text-left bg-white/5 border border-white/15 rounded-xl p-6 mb-10 max-w-2xl mx-auto">
              <p className="text-teal-200 font-semibold mb-4">
                Email {APPLY_EMAIL} with your answers to:
              </p>
              <ol className="space-y-3 list-decimal list-inside text-blue-50">
                {apply.questions.map((q, i) => (
                  <li key={i} className="leading-relaxed">
                    {q}
                  </li>
                ))}
              </ol>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <a href={APPLY_MAILTO}>
                Apply now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-blue-200 mt-6">
              {apply.contactName} · {APPLY_EMAIL}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
