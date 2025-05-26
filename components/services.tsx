import type { ServiceItem } from "@/lib/static-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Cog, Users } from "lucide-react"

interface ServicesProps {
  data: ServiceItem[]
}

const serviceIcons = [
  <Cog key="cog" className="w-12 h-12 text-teal-400" />,
  <Bot key="bot" className="w-12 h-12 text-teal-400" />,
  <Users key="users" className="w-12 h-12 text-teal-400" />,
]

export default function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Products & Services</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions designed to address your most critical business challenges and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors duration-300"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">{serviceIcons[index]}</div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
