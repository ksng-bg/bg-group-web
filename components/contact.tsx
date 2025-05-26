"use client"

import type { ContactData } from "@/lib/static-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactProps {
  data: ContactData
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{data.headline}</h2>
            <p className="text-xl text-blue-100">
              Let's discuss how we can help transform your business and achieve your strategic objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href={`mailto:${data.email}`} className="text-white hover:text-teal-300 transition-colors">
                      {data.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-blue-100 mb-6 text-lg">Ready to start your transformation journey?</p>
                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => (window.location.href = `mailto:${data.email}`)}
                >
                  {data.ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
