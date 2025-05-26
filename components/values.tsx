import type { ValueItem } from "@/lib/static-content"

interface ValuesProps {
  data: { grid: ValueItem[] }
}

export default function Values({ data }: ValuesProps) {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do and define who we are as an organization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {data.grid.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 hover:from-blue-100 hover:to-teal-100 transition-all duration-300 transform group-hover:scale-105">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
