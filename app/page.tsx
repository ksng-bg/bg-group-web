import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Approach from "@/components/approach"
import Values from "@/components/values"
import Services from "@/components/services"
import Industries from "@/components/industries"
import WhyBrilly from "@/components/why-brilly"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import staticContent from "@/lib/static-content"

export default function Page() {
  const { hero, approach, values, services, industries, whyBrilly, contact } = staticContent

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero data={hero} />
      <Approach data={approach} />
      <Values data={values} />
      <Services data={services} />
      <Industries data={industries} />
      <WhyBrilly data={whyBrilly} />
      <Contact data={contact} />
      <Footer />
    </main>
  )
}
