import { useState, useEffect } from "react";

/**
 * Custom hook to detect mobile viewport
 * @param breakpoint The pixel width to trigger mobile state (default: 768px)
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const query = `(max-width: ${breakpoint}px)`;
  const [isMobile, setIsMobile] = useState<boolean>(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    // Create a media query list
    const mql = window.matchMedia(query);

    // Event listener for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mql.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMobile;
};
