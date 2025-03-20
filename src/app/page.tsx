import SEO from '@/components/SEO'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      {/* <SEO title="我们的服务" description="专业的企业解决方案服务" path="/services" /> */}

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">核心服务</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
