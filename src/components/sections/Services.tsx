// src/components/sections/Services.tsx
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Code2, Smartphone, Database, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern frameworks and best practices.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design'],
  },
  {
    icon: Smartphone,
    title: 'E-Commerce Solutions',
    description: 'Complete online stores with payment integration, inventory management, and analytics.',
    features: ['Shopify & WooCommerce', 'Payment Gateways', 'Product Management'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust APIs and server-side solutions to power your applications.',
    features: ['REST & GraphQL', 'Node.js & Python', 'Cloud Infrastructure'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your site and improve user experience with targeted optimizations.',
    features: ['Core Web Vitals', 'SEO Optimization', 'CDN Integration'],
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive web development solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Button href="/services" variant="outline" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
}
