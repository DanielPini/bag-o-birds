import { useState, useEffect } from "react";

const query = "(prefers-reduced-motion: reduce)";

/**
 * Custom hook to detect the user's reduced motion setting
 */
export const usePrefersReducedMotion = (): boolean => {
  const [reducedMotion, setReducedMotion] = useState<boolean>(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mql.addEventListener("change", handleChange);

    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);

  return reducedMotion;
};
