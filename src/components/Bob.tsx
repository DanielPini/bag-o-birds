import { useEffect, useRef, useState } from "react";

const EMAIL = "daniel@danielpini.com";

export default function Bob() {
  const [woofing, setWoofing] = useState(false);
  const bobRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape, or on a click anywhere outside Bob and the bubble
  useEffect(() => {
    if (!woofing) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setWoofing(false);
      buttonRef.current?.focus();
    }
    function handlePointerDown(e: PointerEvent) {
      if (!bobRef.current?.contains(e.target as Node)) setWoofing(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [woofing]);

  return (
    <div ref={bobRef} className={`bob ${woofing ? "is-woofing" : ""}`}>
      <button
        ref={buttonRef}
        type="button"
        className="bob-button"
        aria-label="Ask Bob how to get in touch"
        aria-expanded={woofing}
        aria-controls="bob-bubble"
        onClick={() => setWoofing(!woofing)}
      >
        <img
          src={import.meta.env.BASE_URL + "bob-transparent-small.webp"}
          alt=""
          width={250}
          height={250}
          className="bob-image"
        />
      </button>
      <span className="woof-lines" aria-hidden="true">
        <span className="woof-line"></span>
        <span className="woof-line"></span>
        <span className="woof-line"></span>
      </span>
      {/* After the button in the DOM, so Tab goes from Bob straight to the link */}
      <div id="bob-bubble" className="bob-bubble">
        <a href={`mailto:${EMAIL}`}>Contact me</a>
      </div>
    </div>
  );
}
