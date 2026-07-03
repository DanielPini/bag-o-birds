import { useEffect, useRef } from "react";

export default function Title() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = bgRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const start = performance.now();
    let frameId: number;

    function loop(now: number) {
      if (!el) return;
      const elapsed = (now - start) / 1000; // seconds since start

      const hue1 =
        0 + 100 * Math.sin(elapsed / 19) + 200 * Math.sin(elapsed / 23 + 2);
      const hue2 =
        90 + 150 * Math.sin(elapsed / 29) + 250 * Math.sin(elapsed / 31 + 3);
      const hue3 =
        180 + 200 * Math.sin(elapsed / 37) + 350 * Math.sin(elapsed / 41 + 4);
      const hue4 =
        270 + 250 * Math.sin(elapsed / 13) + 100 * Math.sin(elapsed / 17 + 5);
      el.style.setProperty("--hue-1", String(hue1));
      el.style.setProperty("--hue-2", String(hue2));
      el.style.setProperty("--hue-3", String(hue3));
      el.style.setProperty("--hue-4", String(hue4));

      frameId = requestAnimationFrame(loop);
    }
    frameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frameId);
  }, []);
  return (
    <div ref={bgRef} className="title-bg">
      <h1>Hello birbs</h1>
    </div>
  );
}
