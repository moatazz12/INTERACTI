'use client';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

export default function LazyHydrateOnScroll({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return <div ref={ref}>{inView ? children : null}</div>;
}
