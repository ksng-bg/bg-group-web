import type { ApproachItem } from "@/lib/static-content"

interface ApproachProps {
  data: { items: ApproachItem[] }
}

export default function Approach({ data }: ApproachProps) {
  return (
    <section id="approach" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that delivers consistent results through strategic thinking and collaborative
            execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.items.map((item, index) => (
            <div key={index}>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-500 text-white rounded-lg mb-4 font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
