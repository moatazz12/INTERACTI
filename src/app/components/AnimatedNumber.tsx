// components/AnimatedNumber.tsx
'use client';

import React, { useRef, useEffect, useState } from "react";

interface AnimatedNumberProps {
  target: number;
}

const AnimatedNumber = ({ target }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateNumber();
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, target]);

  const animateNumber = () => {
    const duration = 1000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.floor(increment * currentStep);

      if (currentValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(currentValue);
      }
    }, stepDuration);
  };

  return <span ref={elementRef}>{count}+</span>;
};

export default AnimatedNumber;
