import { Wrench, Factory, Heart, Users, ShoppingCart, Briefcase, GraduationCap, Truck } from "lucide-react"

interface IndustriesProps {
  data: string[]
}

const industryIcons = [
  <Wrench key="wrench" className="w-8 h-8 text-teal-600" />,
  <Factory key="factory" className="w-8 h-8 text-teal-600" />,
  <Heart key="heart" className="w-8 h-8 text-teal-600" />,
  <Users key="users" className="w-8 h-8 text-teal-600" />,
  <ShoppingCart key="shoppingcart" className="w-8 h-8 text-teal-600" />,
  <Briefcase key="briefcase" className="w-8 h-8 text-teal-600" />,
  <GraduationCap key="graduationcap" className="w-8 h-8 text-teal-600" />,
  <Truck key="truck" className="w-8 h-8 text-teal-600" />,
]

export default function Industries({ data }: IndustriesProps) {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep expertise across diverse sectors, bringing industry-specific insights to every engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((industry, index) => (
            <div
              key={industry}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {industryIcons[index]}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
