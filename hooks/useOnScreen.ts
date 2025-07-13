import { useEffect, useState, RefObject } from "react";

export function useOnScreen(ref: RefObject<HTMLElement | null>, threshold = 0.2) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;  // Si l'élément n'est pas encore monté, on ne fait rien.

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      { threshold }
    );

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [ref, threshold]);

  return isIntersecting;
}
