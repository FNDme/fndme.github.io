import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        // Prevent flickering by checking if the element is actually visible
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setIsIntersecting(true);
          if (once && observerRef.current) {
            observerRef.current.disconnect();
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    const currentObserver = observerRef.current;

    if (currentRef && currentObserver) {
      currentObserver.observe(currentRef);
    }

    return () => {
      if (currentRef && currentObserver) {
        currentObserver.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once]);

  return { ref, isIntersecting };
};
