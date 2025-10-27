// src/app/page.tsx
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CallToAction } from '@/components/sections/CallToAction';
import { ContactPreview } from '@/components/sections/ContactPreview';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <AboutPreview />
      <CallToAction />
      <ContactPreview />
    </main>
  );
}
