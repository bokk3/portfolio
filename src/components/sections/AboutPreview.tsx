// src/components/sections/AboutPreview.tsx
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Modern tech stack with cutting-edge frameworks',
  'Mobile-first, responsive design approach',
  'SEO optimized for maximum visibility',
  'Fast turnaround times without compromising quality',
  'Ongoing support and maintenance',
  'Transparent communication throughout',
];

export function AboutPreview() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're not just developers – we're your partners in digital success. 
            With years of experience and a passion for innovation, we deliver 
            solutions that exceed expectations.
          </p>

          {/* Benefits List */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>

          <Button href="/contact" size="lg">
            Let's Work Together
          </Button>
        </div>

        {/* Right - Visual/Stats */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-purple-100">Projects Delivered</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-green-100">Satisfaction Rate</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-8 text-white">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-orange-100">Support Available</div>
          </div>
        </div>
      </div>
    </Section>
  );
}