// src/components/sections/CallToAction.tsx
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CallToAction() {
  return (
    <Section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's bring your ideas to life. Get in touch today for a free consultation 
          and quote.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="/contact" 
            variant="secondary"
            size="lg" 
            className="group bg-white text-blue-600 hover:bg-gray-100"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            href="/projects" 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10"
          >
            View Portfolio
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>Fast Response Time</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>No Obligation Quote</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>Flexible Pricing</span>
          </div>
        </div>
      </div>
    </Section>
  );
}