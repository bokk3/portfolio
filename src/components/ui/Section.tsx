// src/components/ui/Section.tsx
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullWidth?: boolean;
}

export function Section({ 
  children, 
  className, 
  containerClassName,
  id,
  fullWidth = false 
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      {fullWidth ? (
        children
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}