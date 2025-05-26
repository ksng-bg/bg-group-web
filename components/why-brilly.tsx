import type { WhyBrillyItem } from "@/lib/static-content"

interface WhyBrillyProps {
  data: WhyBrillyItem[]
}

export default function WhyBrilly({ data }: WhyBrillyProps) {
  return (
    <section id="why-brilly" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Brilly Group</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What sets us apart and makes us the right partner for your transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4 mx-auto">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
